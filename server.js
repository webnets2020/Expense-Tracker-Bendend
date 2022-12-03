import express, { application } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import transactionRoutes from "./routes/transactionRoutes.js";
import AuthApi from './routes/AuthApi.js';
import userApi from './routes/userApi.js';
import connectDB from "./database/connectDB.js";
import passport from 'passport';
import passportConfig from './config/passport.js';

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(passport.initialize());
passportConfig(passport)

connectDB();

const PORT = 5000;

//middlerware

app.use("/", transactionRoutes);
app.use("/auth", AuthApi);
app.use('/user',userApi);

app.listen(PORT, () =>
  console.log(`Server running on port no: http://localhost:${PORT}`)
);
