import express from 'express';
import TransactionController from '../controller/TransactionController.js';
import passport from 'passport'

const router = express.Router()



router.get('/transaction',passport.authenticate("jwt",{session:false}), TransactionController.getTransaction);  
router.post("/transaction",passport.authenticate("jwt",{session:false}), TransactionController.Transaction);
router.delete('/transaction/:id',passport.authenticate("jwt",{session:false}),TransactionController.deleteTransaction);
router.patch('/transaction/:id' ,passport.authenticate("jwt",{session:false}),TransactionController.updateTransaction)



export default router;