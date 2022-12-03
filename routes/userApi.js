import express from 'express';
import TransactionController from '../controller/TransactionController.js';
import passport from 'passport'

const router = express.Router()

router. get('/',
passport.authenticate("jwt",{session:false}),
(req,res)=>{
    res.json({user:req.user})
}
)

export default router;