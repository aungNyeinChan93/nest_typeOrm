/* eslint-disable prettier/prettier */
import z from 'zod';
import { User } from '../entities/user.entity';

export const UserProfileSchema = z.object({
    nickName: z.string(),
    avator: z.string().nullish(),
    user: z.instanceof(User).nullish()
});

export type CreateUserProfile = z.infer<typeof UserProfileSchema>
export type UpdateuserProfile = Partial<CreateUserProfile>