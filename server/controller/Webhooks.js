import { Webhook } from "svix";
import User from "../modle/User.js";
import mongoose from "mongoose";

// API controller function to manage Clerk user with database
export const clerkWebhooks = async (req, res) => {
    try {
        console.log("📩 Webhook Received:", req.body); // ✅ Webhook data log

        const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

        try {
            await whook.verify(JSON.stringify(req.body), {
                "svix-id": req.headers["svix-id"],
                "svix-timestamp": req.headers["svix-timestamp"],
                "svix-signature": req.headers["svix-signature"],
            });
            console.log("✅ Webhook Verified Successfully");
        } catch (verificationError) {
            console.error("❌ Webhook Verification Failed:", verificationError);
            return res.status(400).json({ message: "Invalid Webhook Signature" });
        }

        const { data, type } = req.body;

        if (!data) {
            console.error("❌ No Data in Webhook");
            return res.status(400).json({ message: "No data received in webhook" });
        }

        console.log("📌 Webhook Type:", type);

        switch (type) {
            case "user.created": {
                const UserData = {
                    _id: new mongoose.Types.ObjectId(data.id), // ✅ Ensure ID is MongoDB ObjectId
                    email: data.email_addresses?.[0]?.email_address || "No Email", // ✅ Handle missing email
                    name: data.full_name || "No Name",
                    imageUrl: data.profile_image_url || "",
                };

                console.log("🆕 Creating User:", UserData);

                await User.create(UserData);
                return res.status(200).json({ message: "User Created" });
            }

            case "user.updated": {
                const UserData = {
                    email: data.email_addresses?.[0]?.email_address || "No Email",
                    name: data.full_name || "No Name",
                    imageUrl: data.profile_image_url || "",
                };

                console.log("🔄 Updating User ID:", data.id, "with", UserData);

                const updatedUser = await User.findByIdAndUpdate(
                    new mongoose.Types.ObjectId(data.id), 
                    UserData,
                    { new: true } // ✅ Return updated user
                );

                if (!updatedUser) {
                    console.error("❌ User Not Found for Update:", data.id);
                    return res.status(404).json({ message: "User Not Found" });
                }

                return res.status(200).json({ message: "User Updated" });
            }

            case "user.deleted": {
                console.log("🗑 Deleting User ID:", data.id);

                const deletedUser = await User.findByIdAndDelete(
                    new mongoose.Types.ObjectId(data.id)
                );

                if (!deletedUser) {
                    console.error("❌ User Not Found for Deletion:", data.id);
                    return res.status(404).json({ message: "User Not Found" });
                }

                return res.status(200).json({ message: "User Deleted" });
            }

            default:
                console.warn("⚠️ Unhandled Webhook Type:", type);
                return res.status(400).json({ message: "Unhandled webhook event" });
        }

    } catch (error) {
        console.error("🚨 Error in Webhook Handler:", error);
        return res.status(500).json({ message: error.message });
    }
};
