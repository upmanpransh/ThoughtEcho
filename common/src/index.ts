import z from 'zod';

export const signupInput=z.object({
    email:z.string().email(),
    password:z.string(),
    name:z.string().optional(),
});

export type signupType = z.infer<typeof signupInput>;

export const signInInput = z.object({
    email:z.string().email(),
    password:z.string(),
});
export type signInType=z.infer<typeof signInInput>;

export const createPostInput = z.object({
    title: z.string(),
    content: z.string(),
});

export type CreatePostType = z.infer<typeof createPostInput>;

export const updatePostInput = z.object({
    title: z.string().optional(),
    content: z.string().optional(),
});

export type UpdatePostType = z.infer<typeof updatePostInput>;