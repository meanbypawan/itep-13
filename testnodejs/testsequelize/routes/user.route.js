import express from "express";
import { signUp } from "../controller/user.controller.js";
import { body } from "express-validator";
const router = express.Router();

// http://localhost:3000/user.signup
router.post("/signup",
    body("name","name is required").notEmpty(),
    body("name","only letter allowed").isAlpha(),
    body("email","email id is required").notEmpty(),
    body("email","not a valid email id").isEmail(),
    body("password","password is required").notEmpty(),
    body("password","password must be between 5 and 10").isLength({min: 5, max:10}),
    body("contact","contact is required").notEmpty(),
    body("contact","only digits are allowed").isNumeric(),
    signUp);

export default router;