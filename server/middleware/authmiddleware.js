import { clerkClient } from "@clerk/express";

// protect educator routes

export const protectEducator = async (req, res, next) => {
    try{
        const userId = req.auth.userId;
        const response = await clerkClient.users.getUser(userId);
        if(response.publicMetadata.role !== "Educator"){
            return res.json({message : " Unauthorized Access" , success : false})
        }
        next()
    }catch(error){
        res.json({message : error.message , success : false})
    }
}
