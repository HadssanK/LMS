import { Webhook } from "svix";
import User from "../modle/User.js";
import Stripe from "stripe";
import Course from "../modle/course.js";
import Purches from "../modle/purches.js";
import dotenv from "dotenv";
dotenv.config();
// API controller function to manage clerk user with database

export const clerkWebhooks = async (req, res) => {
  try {
    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);
    await whook.verify(JSON.stringify(req.body), {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    });
    const { data, type } = req.body;

    switch (type) {
      case "user.created": {
        const UserData = {
          _id: data.id,
          email: data.email_addresses[0].email_address,
          name: data.first_name + " " + data.last_name,
          imageUrl: data.image_url,
        };
        await User.create(UserData);
        res.json({});
        break;
      }
      case "user.updated": {
        const UserData = {
          email: data.email_address[0].email_address,
          name: data.full_name,
          imageUrl: data.profile_image_url,
        };
        await User.findByIdAndUpdate(data.id, UserData);
        res.status(200).json({ message: "User Updated" });
        break;
      }
      case "user.deleted": {
        await User.findByIdAndDelete(data.id);
        res.status(200).json({ message: "User Deleted" });
        break;
      }
      default:
        break;
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const stripeInstance = new Stripe(process.env.STRIPE_SECRET_KEY);

export const stripeWebhooks = async (request, response) => {
  const sig = request.headers["stripe-signature"];
  let event;

  try {
    event = Stripe.webhooks.constructEvent(
      request.body,
      sig,
      process.env.STRIPE_WEBHOOKS_KEY
    );
  } catch (error) {
    return response.status(400).send(`Webhook error ${error.message}`);
  }

  switch (event.type) {
    case "payment_intent.succeeded":
      const paymentIntent = event.data.object;
      const paymentIntentId = paymentIntent.id;

      const session = await stripeInstance.checkout.sessions.list({
        payment_intent: paymentIntentId,
      });
      const { purchaseId } = session.data[0].metadata;

      const purchaseData = await Purches.findById(purchaseId);
      if (!purchaseData) {
        return response.status(400).send("Purchase data not found");
      }

      const userData = await User.findById(purchaseData.userId);
      const courseData = await Course.findById(purchaseData.courseId.toString());

      if (!userData || !courseData) {
        return response.status(400).send("User or Course not found");
      }

      courseData.enrolledStudents.push(userData);
      await courseData.save();

      userData.enrolledCourses.push(courseData._id);
      await userData.save();

      purchaseData.status = "Completed"; // Update status to Completed
      await purchaseData.save();

      break;

    case "payment_intent.payment_failed":
      const failedPaymentIntent = event.data.object;
      const failedPaymentIntentId = failedPaymentIntent.id;

      const failedSession = await stripeInstance.checkout.sessions.list({
        payment_intent: failedPaymentIntentId,
      });

      const { failedPurchaseId } = failedSession.data[0].metadata;
      const failedPurchaseData = await Purches.findById(failedPurchaseId);

      if (failedPurchaseData) {
        failedPurchaseData.status = "Failed"; // Update status to Failed
        await failedPurchaseData.save();
      }

      break;

    // Handle other cases as needed
    default:
      console.log(`Unhandled event type: ${event.type}`);
  }

  response.json({ received: true });
};
