import express from "express";
import { list, save } from "../controller/product.controller.js";

const router = express.Router();

router.post("/",save);
router.get("/",list);
export default router;