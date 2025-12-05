/* eslint-disable prettier/prettier */
import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "./user.entity";



@Entity()
export class UserProfile {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nickNmae: string;

    @Column()
    avator: string

    @OneToOne(() => User, user => user.userProfile, { cascade: true })
    @JoinColumn({ name: "user_id" })
    user: User

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date
}