/* eslint-disable prettier/prettier */
import { setSeederFactory } from "typeorm-extension";
import { User } from "../entities/user.entity";
import { Faker } from "@faker-js/faker";



export const UserFactory = setSeederFactory(User, (faker: Faker) => {

    const user = new User();

    user.name = faker.person.fullName();
    user.email = faker.internet.email();
    user.password = faker.string.numeric();

    return user;
})