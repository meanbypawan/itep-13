import express from "express";
import { getProductById, list, saveInBluk, updateProduct } from "../controller/product.controller.js";
import { auth } from "../middleware/auth.js";

const router = express.Router();

router.post("/save-in-bulk",saveInBluk);
router.get("/",auth,list);
router.get("/:id",auth,getProductById);
router.patch("/:id",auth,updateProduct);
export default router;