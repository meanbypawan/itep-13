import express from "express";
import { saveInBulk, getProductById, buyNowPage } from "../controller/product.controller.js";
import { auth } from "../middleware/auth.js";
const router = express.Router();

// http://localhost:3000/product/save-in-bulk
router.post("/save-in-bulk",saveInBulk);
router.get("/:productId",getProductById);
router.get("/buy-now/:productId",auth,buyNowPage);
export default router;