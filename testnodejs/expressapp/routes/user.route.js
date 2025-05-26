import express from "express";
import { signUp,checkForEmail, signIn } from "../controller/user.controller.js";

const router = express.Router();

// http://localhost:3000/user/sign-up
router.post("/signup",signUp);
router.get("/check-for-email-id/:emailId",checkForEmail);
router.post("/signin",signIn);
export default router;