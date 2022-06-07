import User from "../models/User.js"

export const updatedUser = async (req, res) => {
    try {


        const updatedUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })

        res.status(200).json(updatedUser)
    } catch (error) {
        res.status(500).json(error)
    }
}

export const deleteUser = async (req, res) => {
    try {


        await User.findByIdAndDelete(req.params.id)

        res.status(200).json("item removed")
    } catch (error) {
        res.status(500).json(error)
    }
}

export const getOneUser = async (req, res) => {
    try {


        const User = await User.findById(req.params.id)

        res.status(200).json(User)
    } catch (error) {
        res.status(500).json(error)
    }
}

export const getAllUsers = async (req, res) => {
    try {


        const Users = await User.find()

        res.status(200).json(Users)
    } catch (error) {
        res.status(500).json(error)
    }
}