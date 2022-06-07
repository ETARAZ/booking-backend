import express from "express"

const roomsRoute = express.Router()

roomsRoute.get("/", (req, res) => {
    res.send("rooms")
})

export default roomsRoute;