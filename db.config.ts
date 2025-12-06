/* eslint-disable prettier/prettier */
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions.js";


export const pgConfig: PostgresConnectionOptions = {
    type: 'postgres',
    url: 'postgresql://neondb_owner:npg_6bVdrMDP1tNO@ep-square-voice-a7dpppim-pooler.ap-southeast-2.aws.neon.tech/neondb?sslmode=require',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    logger: "simple-console",
    synchronize: true,
    // autoLoadEntities 
}