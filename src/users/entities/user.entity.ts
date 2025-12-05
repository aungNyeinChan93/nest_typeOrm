/* eslint-disable prettier/prettier */
import { Column, Entity, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserProfile } from "./userProfile.entity";
import { Post } from "src/posts/entities/post.entity";


@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string

    @Column()
    email: string;

    @Column()
    password: string

    @OneToOne(() => UserProfile, (userProfile) => userProfile.user)
    userProfile: UserProfile

    @OneToMany(() => Post, (post) => post.author)
    posts: Post[]

    @ManyToMany(() => Post, (post) => post.likeBy)
    liked_posts: Post[]
}
