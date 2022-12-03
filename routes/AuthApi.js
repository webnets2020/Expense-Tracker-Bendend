import express from 'express';
import RegisterController from '../controller/RegisterController.js';

const router = express.Router();

router.post('/register', RegisterController.Register);
router.post("/login", RegisterController.Login);

export default router;