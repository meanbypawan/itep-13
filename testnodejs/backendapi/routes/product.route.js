import express from "express";
import { list, saveInBulk, fetchProduct } from "../controller/product.controller.js";
const router = express.Router();

router.post("/bulk-create",saveInBulk);
router.get("/",list);
router.get("/:id",fetchProduct);
export default router;