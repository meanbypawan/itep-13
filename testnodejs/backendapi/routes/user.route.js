
import express from "express";
import { createProfile,createUser, authenticateUser, verifyAccount, list, fetchUser } from "../controller/user.controller.js";
import { body } from "express-validator";
import multer from "multer";
const upload = multer({dest: "public/profile"});
const router = express.Router();
router.get("/",list);

router.post("/", body("name", "name is required").notEmpty(),
    body("name", "Only Alphabets are allowed").isAlpha(),
    body("email", "email id is required").notEmpty(),
    body("email", "invalid email id").isEmail(),
    body("password", "password is required").notEmpty(),
    body("contact", "contact number is required").notEmpty(),
    body("contact", "only digits are allowed").isNumeric(), createUser);

router.post("/authenticate",authenticateUser);   

router.post("/verification",verifyAccount);

router.patch("/profile/:userId",upload.single("imageName"),createProfile);
router.get("/:userId",fetchUser);
export default router;