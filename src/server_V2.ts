import "reflect-metadata";
import express from "express";

import {router} from "./routes";

import "./database";

const app = express();

app.use(express.json());

app.use(router);

// http://localhost:3081
app.listen(3081, () => console.log(" server user running V2"));