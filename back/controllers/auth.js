import User from "../models/User.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export const register = async (req, res) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        const hashPassword = bcrypt.hashSync(req.body.password, salt);
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashPassword
        })

        await newUser.save()

        return res.status(200).json("user has been created")
    } catch (error) {
        console.log(error)
    }
}


export const login = async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username })

        if (!user) {
            return res.status(404).json("user not exist")
        }
        const correctPwd = await bcrypt.compare(req.body.password, user.password)

        if (correctPwd) {

            const { password, isAdmin, ...other } = user._doc

            const token = jwt.sign({ id: user.id, isAdmin }, process.env.JWT)
            return res.cookie("access_token", token, {
                httpOnly: true
            }).status(200).json(other)
        }

        return res.status(400).json("credential invalid")

    } catch (error) {
        console.log(error)
    }
}