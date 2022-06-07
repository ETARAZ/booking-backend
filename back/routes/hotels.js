import express from "express"
import { createHotel,updatedHotel,deleteHotel,getOneHotel,getAllHotels } from "../controllers/hotel.js"

const hotelsRoute = express.Router()
//create
hotelsRoute.post("/", createHotel)

//update

hotelsRoute.put("/:id", updatedHotel)

//delete

hotelsRoute.delete("/:id", deleteHotel)


//get one

hotelsRoute.get("/:id", getOneHotel)

//get all

hotelsRoute.get("/",getAllHotels)
export default hotelsRoute;