import express from "express";
import { getProductById, list, saveInBluk, updateProduct } from "../controller/product.controller.js";

const router = express.Router();

router.post("/save-in-bulk",saveInBluk);
router.get("/",list);
router.get("/:id",getProductById);
router.patch("/:id",updateProduct);
export default router;