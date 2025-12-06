/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable prettier/prettier */
import { pgConfig } from "../../db.config";
import { UserFactory } from "../users/factory/user.factory";
import { UserProfileFactory } from "../users/factory/userProfile.factory";
import { DataSourceOptions } from "typeorm";
import { runSeeders, SeederOptions } from "typeorm-extension";
import { MainSeeder } from "./main.seeder";
import { DataSource } from "typeorm/browser";
import { PostFactory } from "../posts/factory/posts.factory";



const option: DataSourceOptions & SeederOptions = {
    ...pgConfig,
    factories: [UserFactory, UserProfileFactory, PostFactory],
    seeds: [MainSeeder],
};

const dataSource = new DataSource(option);

dataSource.initialize().then(async () => {
    await dataSource.synchronize(true);
    await runSeeders(dataSource);
    process.exit();

})