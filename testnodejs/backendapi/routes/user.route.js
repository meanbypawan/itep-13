import express from "express";
import { createUser, authenticateUser, verifyAccount } from "../controller/user.controller.js";
import { body } from "express-validator";
const router = express.Router();

router.post("/", body("name", "name is required").notEmpty(),
    body("name", "Only Alphabets are allowed").isAlpha(),
    body("email", "email id is required").notEmpty(),
    body("email", "invalid email id").isEmail(),
    body("password", "password is required").notEmpty(),
    body("contact", "contact number is required").notEmpty(),
    body("contact", "only digits are allowed").isNumeric(), createUser);

router.post("/authenticate",authenticateUser);   

router.post("/verification",verifyAccount);
export default router;