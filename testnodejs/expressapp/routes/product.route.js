import express from "express";
import { saveInBulk } from "../controller/product.controller.js";
const router = express.Router();

// http://localhost:3000/product/save-in-bulk
router.post("/save-in-bulk",saveInBulk);
export default router;