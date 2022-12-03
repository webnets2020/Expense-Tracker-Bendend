import TransactionModel from "../models/transaction.js";

class TransactionController {
  static getTransaction = async (req, res) => {
    try {
      const transaction = await TransactionModel.find({user_id:req.user._id}).sort({ createdAt: -1, });
      res.status(200).json({ data: transaction });
    } catch (err) {
      console.log(err);
    }
  };

  static Transaction = async (req, res) => {
    try {
      const { amount, description, date } = req.body;
      const transaction = new TransactionModel({
        amount,
        description, 
        user_id: req.user._id,
        date,
      });

      await transaction.save();
      res.status(201).json({ message: "Success" });
    } catch (err) {
      console.log(err);
    }
  };

  static updateTransaction = async (req, res) => {
    try {
      await TransactionModel.findByIdAndUpdate(
        { _id: req.params.id },
        { $set: req.body }
      );

      res.status(200).json({ message: "Updated Successfully...!" });
    } catch (err) {
      console.log(err);
    }
  };

  static deleteTransaction = async (req, res) => {
    try {
      await TransactionModel.findByIdAndDelete({ _id: req.params.id });
      res.status(200).json({ message: "Deleted Successfylly...!" });
    } catch (err) {
      console.log(err);
    }
  };
}

export default TransactionController;
