import express from "express";
import contactController from "../controller/contactController.js";



const router=express.Router();

//Route 1:
router.post('/contact', contactController);

export default router;

