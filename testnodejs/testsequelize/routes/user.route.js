import express from "express";
import { signUp,signIn } from "../controller/user.controller.js";
import { body } from "express-validator";
const router = express.Router();

// http://localhost:3000/user
router.post("/",
    body("name","name is required").notEmpty(),
    body("name","only letter allowed").isAlpha(),
    body("email","email id is required").notEmpty(),
    body("email","not a valid email id").isEmail(),
    body("password","password is required").notEmpty(),
    body("password","password must be between 5 and 10").isLength({min: 5, max:10}),
    body("contact","contact is required").notEmpty(),
    body("contact","only digits are allowed").isNumeric(),
    signUp);
// http://localhost:3000/user/sign-in
router.post("/sign-in",signIn);    

export default router;