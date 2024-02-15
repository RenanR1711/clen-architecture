import express from "express";
import createBet from "../useCases/bets/createBet";
const router = express.Router();

router.post("/", createBet);

export default router;
