import mongoose, { Schema, Document, Model } from "mongoose";

interface Bet extends Document {
  betValue: number;
}

const betSchema: Schema = new Schema({
  betValue: {
    type: Number,
    required: true,
  },
});

const Bet: Model<Bet> = mongoose.model<Bet>("bet", betSchema);

export default Bet;
