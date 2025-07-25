import express from "express";
import { save } from "../controller/order.controller.js";

const router = express.Router();

router.post("/",save);

export default router;