import express from "express";
import betRoutes from "./routes/betRoutes";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const PORT = 4000;
async function connectMongo() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Conectamos no mongo!");
  } catch (error) {
    console.log("Deu pau no mongo!");
  }
}
connectMongo();
app.use(express.json());
app.use("/api/v1/bets", betRoutes);
app.listen(PORT, () => {
  console.log("MINHA APLICAÇÃO EXPRESS!");
});
