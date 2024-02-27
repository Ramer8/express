import 'dotenv/config'
import "reflect-metadata"
import { DataSource } from "typeorm"
import { Roles1708945149105 } from "./migrations/1708945149105-roles"
import { Users1708948671637 } from "./migrations/1708948671637-users"
import { Authors1709037506357 } from './migrations/1709037506357-authors'
import { User } from '../models/User'
import { Role } from '../models/Role'

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT) || 3306,
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_DATABASE || "",
  entities: [Role, User],
  migrations:[Roles1708945149105,Users1708948671637, Authors1709037506357],
  synchronize: false,
  logging: false,
})
