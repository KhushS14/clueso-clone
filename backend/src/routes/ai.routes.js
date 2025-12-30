import express from "express";
import { getAIInsights } from "../controllers/ai.controller.js";

const router = express.Router();

router.post("/insights", getAIInsights);

export default router;
