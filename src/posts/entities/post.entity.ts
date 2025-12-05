/* eslint-disable prettier/prettier */
import { User } from "src/users/entities/user.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'author_id' })
    author: User

    @ManyToMany(() => User, user => user.liked_posts)
    @JoinTable({ name: 'user_like_posts' })
    likeBy: User[]
}
