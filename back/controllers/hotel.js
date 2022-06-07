import Hotel from "../models/Hotel.js"
export const createHotel = async (req, res) => {
    try {
        const newHotel = new Hotel(req.body)

        const createdHotel = await newHotel.save()

        res.status(200).json(createdHotel)
    } catch (error) {
        res.status(500).json(error)
    }
}

export const updatedHotel = async (req, res) => {
    try {


        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })

        res.status(200).json(updatedHotel)
    } catch (error) {
        res.status(500).json(error)
    }
}

export const deleteHotel = async (req, res) => {
    try {


        await Hotel.findByIdAndDelete(req.params.id)

        res.status(200).json("item removed")
    } catch (error) {
        res.status(500).json(error)
    }
}

export const getOneHotel = async (req, res) => {
    try {


        const hotel = await Hotel.findById(req.params.id)

        res.status(200).json(hotel)
    } catch (error) {
        res.status(500).json(error)
    }
}

export const getAllHotels = async (req, res) => {
    try {


        const hotels = await Hotel.find()

        res.status(200).json(hotels)
    } catch (error) {
        res.status(500).json(error)
    }
}