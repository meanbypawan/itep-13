import express from "express";
import { signUp } from "../controller/user.controller.js";

const router = express.Router();

// http://localhost:3000/user/sign-up
router.post("/signup",signUp);
export default router;