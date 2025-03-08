import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "dev",
    password: "123456",
    database: "agenda",
    synchronize: true,
    logging: true,
    entities: [],
    subscribers: [],
    migrations: [],
})