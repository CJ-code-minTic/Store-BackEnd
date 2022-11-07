import bcrypt from "bcryptjs";
import User from "../models/user.js";

const createUser = async (req, res) => {
    try {
        const { documentType,
            documentId,
            firstName,
            lastName,
            userName,
            password,
            role } = req.body

        const salt = bcrypt.genSaltSync()
        const pass = bcrypt.hashSync(password, salt)

        const user = await User.create({
            documentType: documentType,
            documentId: documentId,
            firstName: firstName,
            lastName: lastName,
            userName: userName,
            password: pass,
            role: role
        })

        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ message: "Error Interno del servidor", detail: error })
    }
}

const getAllUsers = async (req, res) => {
    try {
        res.send(await User.findAll())
    } catch (error) {
        res.status(500).json({ message: "Error Interno del servidor", detail: error })
    }
}

export { createUser, getAllUsers }