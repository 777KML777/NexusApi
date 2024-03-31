import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./Domain/Entities/User/User";
import { Enterprise } from "./Domain/Entities/Enterprise/EnterpriseEntity";
import { PublicationEntity } from "./Domain/Entities/Publication/PublicationEntity";
import { NotificationEntity } from "./Domain/Entities/Notification/NotificationEntity";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "raja.db.elephantsql.com",
    port: 5432,
    username: "rvaougxp",
    password: "cbXiqmejPg0E6JCL8qK7QMvgbyJ3SHov",
    database: "rvaougxp",
    synchronize: true,
    logging: false,
    entities: [
        User,
        Enterprise,
        PublicationEntity,
        NotificationEntity,
    ],
    migrations: [],
    subscribers: [],
})
