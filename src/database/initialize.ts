import { createConnection } from 'typeorm'
import User from './entities/userEntity'
import path from 'path'
import Post from './entities/postEntity'

const initializeDB = async () => {
    const connection = await createConnection({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: '123',
        database: 'gh0st',
        entities: [User, Post]
    })
    return connection
}

export default initializeDB