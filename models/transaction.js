import mongoose from "mongoose";

const transctionSchema = mongoose.Schema({
  amount: Number,
  description: String,
  user_id: mongoose.Types.ObjectId,
  date: { type: Date, default: new Date() },
  createdAt: { type: Date, default: Date.now },
});

const TransactionModel = mongoose.model("Transaction", transctionSchema);

export default TransactionModel;
