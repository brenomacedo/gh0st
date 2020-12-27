import { createConnection } from 'typeorm'

const initializeDB = async () => {
    const connection = await createConnection()
    return connection
}

export default initializeDB