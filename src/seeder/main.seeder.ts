/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { faker } from "@faker-js/faker";
import { User } from "../users/entities/user.entity";
import { UserProfile } from "../users/entities/userProfile.entity";
import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";
import { Post } from "../posts/entities/post.entity";



export class MainSeeder implements Seeder {
    track?: boolean | undefined;
    async run(dataSource: DataSource, factoryManager: SeederFactoryManager): Promise<any> {

        const userFactory = factoryManager.get(User);
        const userProfileFactory = factoryManager.get(UserProfile);
        const postFactory = factoryManager.get(Post)

        const fakeUsers = await Promise.all(
            Array(10).fill('').map(async () => {
                const users = await userFactory.make({
                    userProfile: await userProfileFactory.save(),
                    email: faker.internet.email(),
                    name: faker.person.fullName(),
                    password: faker.string.sample(),
                    posts: [await postFactory.save()]
                })
                return users;
            })

        );

        const userRepo = dataSource.getRepository(User);
        await userRepo.save(fakeUsers)

    }

}