import express from "express";
const router = express.Router();

import { signin, signup } from "../controllers/user.js";

router.post("/api/signin", signin);
router.post("/api/signup", signup);

export default router;