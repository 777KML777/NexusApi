import "reflect-metadata";
import { DataSource, DataSourceOptions } from "typeorm";
import { User } from "./Domain/Entities/User/User";
import { Enterprise } from "./Domain/Entities/Enterprise/EnterpriseEntity";
import { PublicationEntity } from "./Domain/Entities/Publication/PublicationEntity";
import { NotificationEntity } from "./Domain/Entities/Notification/NotificationEntity";
import "dotenv/config";


const getDBConfig = (json: any) => {
    const newObj = {};
    
    for (const prop in json) {
    if (!prop.startsWith("DB_")) {
    continue;
    }
    const newProp = prop.substring(prop.indexOf("_") + 1).toLowerCase();
    newObj[newProp] = json[prop];
    }
    
    return newObj;
    };
    
    const config = getDBConfig(process.env) as DataSourceOptions;
    
    

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