import express from "express";
import { list, saveInBulk, fetchProduct, searchProduct } from "../controller/product.controller.js";
import { auth } from "../middleware/Auth.js";
const router = express.Router();

router.post("/bulk-create",saveInBulk);
router.get("/search",searchProduct);
router.get("/:id",auth,fetchProduct);
router.get("/", list);
export default router;