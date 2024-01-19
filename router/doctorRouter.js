const express=require("express"); 
const router=express.Router(); 
const {doctorFunction}=require('../controller/doctorController');
router.get('/:state',doctorFunction);

module.exports=router;