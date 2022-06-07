import express from "express"
import { updatedUser, deleteUser, getOneUser, getAllUsers } from "../controllers/user.js"

const usersRoute = express.Router()
//update

usersRoute.put("/:id", updatedUser)

//delete

usersRoute.delete("/:id", deleteUser)


//get one

usersRoute.get("/:id", getOneUser)

//get all

usersRoute.get("/", getAllUsers)
export default usersRoute;