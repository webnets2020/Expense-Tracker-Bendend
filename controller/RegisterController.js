import UserModel from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


const  categories = [
  {label:"Travel", icon:"user"},
  {label:"Shopping", icon:"user"},
  {label:"Investment", icon:"user"},
  {label:"Bills", icon:"user"}
]

class RegisterController {
  static Register = async (req, res) => {
    try {
      //get all user
      const { email, firstName, lastName, password } = req.body;

      //if check user exist with same email

      const userExist = await UserModel.findOne({ email });
      if (userExist) {
        res.status(406).json({ mesage: "User already exists...!" });
        return;
      }

      //hashpassword
      const saltRounds = 10;
      const salt = bcrypt.genSaltSync(saltRounds);
      const hashPassword = await bcrypt.hashSync(password, salt);

      //create new user

      const user = await UserModel({
        email,
        firstName,
        lastName,
        password: hashPassword,
        categories: categories,
      });
      await user.save();

      res.status(201).json({ message: "user created...!" });
    } catch (err) {
      console.log(err);
    }
  };

  static Login = async (req, res) => {
    try {
      const { email, password } = req.body;

      const user = await UserModel.findOne({ email });
      if (!user) {
        res.status(406).json({ message: "Credentials not found" });
        return;
      }

      //compare password hash

      const matched = await bcrypt.compare(password, user.password);
      if (!matched) {
        res.status(406).json({ message: "Credentials not found" });
        return;
      }

      // if user exists and jwt

      const payload = {
        username: email,
        _id: user._id,
      };

      const token = jwt.sign(payload, "Some Secret.");

      res.json({ message: "Successfully logged in", token, user });
    } catch (err) {
      console.log(err);
    }
  };
}

export default RegisterController;
