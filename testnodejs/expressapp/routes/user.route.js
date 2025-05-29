import express from "express";
import { signUp,checkForEmail,uploadProfile,profilePage, signIn, signOut } from "../controller/user.controller.js";
import {auth} from "../middleware/auth.js";
import multer from "multer";
const upload = multer({dest:"public/user_profile"});
const router = express.Router();

// http://localhost:3000/user/sign-up
router.post("/signup",signUp);
router.get("/check-for-email-id/:emailId",checkForEmail);
router.post("/signin",signIn);
router.get("/sign-out",signOut);
router.get("/profile",auth,profilePage);
router.post("/profile",auth,upload.single("profile"),uploadProfile);
export default router;









