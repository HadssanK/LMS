import { Webhook } from "svix";
import User from "../modle/User.js";

// API controller function to manage clerk user with database

export const clerkWebhooks = async (req , res) => {
    try {
        const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET || "whsec_Ny5RF09IZrxDAV1VIHEgPgyIlxes7uaF");
        await whook.verify(JSON.stringify(req.body), {
            "svix-id": req.headers["svix-id"],
            "svix-timestamp": req.headers["svix-timestamp"],
            "svix-signature": req.headers["svix-signature"],
        });
        const {data , type} = req.body;

        switch(type){
            case "user.created":{
                const UserData = {
                    _id: data.id,
                    email : data.email_addresses[0].email_address,
                    name : data.full_name,
                    imageUrl : data.image_url,
                }
                await User.create(UserData);
                res.json({})
                break;
            }
            case "user.updated":{
                const UserData = {
                    email : data.email_address[0].email_address,
                    name : data.full_name,
                    imageUrl : data.profile_image_url,
                }
                await User.findByIdAndUpdate(data.id,UserData);
                res.status(200).json({message : "User Updated"})
                break;
            }
            case "user.deleted":{
                await User.findByIdAndDelete(data.id);
                res.status(200).json({message : "User Deleted"})
                break;
            }
            default:
                break;

        }
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}