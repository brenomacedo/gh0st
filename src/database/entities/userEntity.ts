import { BeforeInsert, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import bcrypt from 'bcrypt'
import Post from "./postEntity"

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

    @OneToMany(() => Post, post => post.userId)
    posts: Post[]

}

export default User