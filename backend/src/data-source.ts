import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/User";
import { Enterprise } from "./entity/Enterprise";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "raja.db.elephantsql.com",
    port: 5432,
    username: "rvaougxp",
    password: "cbXiqmejPg0E6JCL8qK7QMvgbyJ3SHov",
    database: "rvaougxp",
    synchronize: true,
    logging: false,
    entities: [User, Enterprise],
    migrations: [],
    subscribers: [],
})
