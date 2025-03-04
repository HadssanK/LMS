import express from "express"
import cors from "cors"
import dotenv from "dotenv"

import ConnectDb from "./config/mongodb.js"
import { clerkWebhooks } from "./controller/Webhooks.js"

dotenv.config()
ConnectDb()
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.send("Hello World!")
})
app.post("/clerk" , express.json() , clerkWebhooks)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})