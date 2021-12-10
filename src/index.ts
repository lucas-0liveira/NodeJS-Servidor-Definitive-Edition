import { createConnection } from "typeorm";
import { User } from "./entities/User";

createConnection (User);