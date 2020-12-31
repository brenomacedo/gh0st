import { NextApiRequest, NextApiResponse } from "next";
import { getRepository } from "typeorm";
import User from "../../../database/entities/userEntity";
import initializeDB from "../../../database/initialize";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    
    if(req.method === 'POST') {

        const { name, login, password } = req.body

        const connection = await initializeDB()

        const userRepository = getRepository(User)
        
        const user = new User()
        user.name = name
        user.login = login
        user.password = password

        await userRepository.save(user)

        await connection.close()

        return res.status(200).json(user)

    } else {
        return res.status(500).json({ error: 'We only accept the post method' })
    }
    
}