import express from 'express';
import { generateAiRecipe } from '../controllers/aiController.js';
const router = express.Router();

router.post("/gen-ai-recipe", generateAiRecipe);

export default router;