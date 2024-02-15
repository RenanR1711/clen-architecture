import Bet from "../../entitiles/Bet";
import { Response } from "express";

interface BetRequest {
  body: {
    betValue: number;
  };
}

export default function createBet(res: Response, req: BetRequest) {
  try {
    const { betValue } = req.body;
    const newBet = new Bet({
      betValue: betValue,
    });
    newBet.save();
    res.status(200).send({ message: "aposta gravadas com sucesso!" });
  } catch (error) {
    res.status(400).send({ message: "algum erro aconteceu" });
  }
}
