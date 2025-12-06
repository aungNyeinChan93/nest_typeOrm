/* eslint-disable prettier/prettier */
import { setSeederFactory } from "typeorm-extension";
import { UserProfile } from "../entities/userProfile.entity";
import { Faker } from "@faker-js/faker";




export const UserProfileFactory = setSeederFactory(UserProfile, (faker: Faker) => {
    const userProfile = new UserProfile();

    userProfile.avator = faker.image.avatar();
    userProfile.nickNmae = faker.person.firstName();

    return userProfile;

})