import express from "express";
import { aboutPage, contactPAge, indexPage, signInPage, signUpPage } from "../controller/index.controller.js";
const router = express.Router();

router.get("/",indexPage);

router.get("/contact",contactPAge);

router.get("/about",aboutPage);

router.get("/sign-in",signInPage);

router.get("/sign-up",signUpPage);
export default router;