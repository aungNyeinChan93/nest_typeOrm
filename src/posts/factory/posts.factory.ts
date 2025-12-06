/* eslint-disable prettier/prettier */
import { setSeederFactory } from "typeorm-extension";
import { Post } from "../entities/post.entity";
import { Faker } from "@faker-js/faker";



export const PostFactory = setSeederFactory(Post, (faker: Faker) => {

    const post = new Post();

    post.description = faker.lorem.paragraph();
    post.title = faker.lorem.text();

    return post;
})