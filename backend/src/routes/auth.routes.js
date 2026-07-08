import express from "express";
const router = express.Router();

import * as authController from "../controllers/auth.controller.js";

router.post("/register", authController.userRegisterController);

router.post("/register", authController.userLoginController);

export default router;