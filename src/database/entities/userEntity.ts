import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm"
import bcrypt from 'bcrypt'

@Entity({
    name: 'user'   
})
class User {
    
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column('varchar')
    name: string

    @Column('varchar')
    login: string

    @Column('varchar')
    password: string

    @BeforeInsert()
    async beforeInsert() {
        this.password = await bcrypt.hash(this.password, 10)
    }
    
}

export default User