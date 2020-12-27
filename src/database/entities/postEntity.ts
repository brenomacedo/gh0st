import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import User from "./userEntity";

@Entity({
    name: 'post'
})
class Post {

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column('varchar')
    title: string

    @Column('longtext')
    content: string

    @Column('datetime')
    createdAt: Date

    @Column('varchar')
    thumb: string

    @Column('integer')
    userId: number

    @ManyToOne(() => User, user => user.id)
    user: User

}

export default Post