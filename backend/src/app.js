import express from "express";
const app = express();

import authRouter from "../src/routes/auth.routes.js";


app.use(express.json());

app.use("/api/auth", authRouter);

export {app};