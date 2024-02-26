import "reflect-metadata"
import { DataSource } from "typeorm"
import { Roles1708945149105 } from "./migrations/1708945149105-roles"
import 'dotenv/config'

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT) || 3306,
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_DATABASE || "",
  entities: [],
  migrations:[Roles1708945149105],
  synchronize: false,
  logging: false,
})
