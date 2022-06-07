import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import authRoute from "./routes/auth.js"
import roomsRoute from "./routes/rooms.js"
import hotelsRoute from "./routes/hotels.js"
import usersRoute from "./routes/users.js"
const app = express()
dotenv.config()

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("CONNECTED")
    } catch (error) {
        console.log(error)
    }
}
//middlewares
app.use(cookieParser())
app.use(express.json())
app.use("/api/auth", authRoute)
app.use("/api/rooms", roomsRoute)
app.use("/api/hotels", hotelsRoute)
app.use("/api/users", usersRoute)
app.listen(8000, () => {
    connect()
    console.log("server start !")
})