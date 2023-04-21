const express=require('express')
const router=express.Router()
router.route('/').get((req,res)=>{
 res.status(200).json({message:"all contacts"})

})
router.route('/:id').put((req,res)=>{
    res.status(200).json({message:`contact "${req.params.id} created` })
   
   })
   router.route('/:id').delete((req,res)=>{
    res.status(200).json({message:`contact${req.params.id} deleted`})
   
   })
   router.route('/').get((req,res)=>{
    res.status(200).json({message:"all contacts"})
   
   })
module.exports=router