import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import ConnectDb from "./config/mongodb.js"
import { clerkWebhooks, stripeWebhooks } from "./controller/Webhooks.js"
import {clerkMiddleware} from "@clerk/express"
import educatorRouter from "./routes/educatorRoute.js"
import connectCloudinary from "./cloudinary.js"
import courseRouter from "./routes/courseRoute.js"
import userRouter from "./routes/userRoute.js"

dotenv.config()
ConnectDb()
await connectCloudinary()
const app = express()

app.use(cors())
app.use(clerkMiddleware())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.send("Hello World!")
})
app.post("/clerk" , express.json() , clerkWebhooks)
app.use('/api/ecudator/',express.json(), educatorRouter);
app.use('/api/course/' , express.json() , courseRouter)
app.use('/api/user/' , express.json() , userRouter)
app.post('/stripe' , express.raw({type:"application/json"}), stripeWebhooks)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})