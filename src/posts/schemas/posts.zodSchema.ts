/* eslint-disable prettier/prettier */
import z from 'zod';

export const PostSchema = z.object({
    title: z.string(),
    description: z.string().nullish(),
    author_id: z.string().nullish()
});

export type CreatePost = z.infer<typeof PostSchema>
export type UpdatePost = Partial<CreatePost>
