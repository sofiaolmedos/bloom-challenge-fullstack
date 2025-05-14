import { Router } from "express";
import { getBrandById, listBrands } from "./brand";

const router = Router();

router.get("/", (req, res) => {
	res.send("API is working.");
});
router.get("/brands", listBrands);
router.get("/brands/:id", getBrandById);

export default router;
