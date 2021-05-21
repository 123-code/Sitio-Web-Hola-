const express = require('express');
const router = express.Router();


router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','index.html'));
});


router.get('/contacto',(req,res)=>{
    res.render('contact',{title:'Contactanos'});
});

router.get('/agenda',(req,res)=>{
  res.render('Agendar',{title:'Agendar'});
})

router.get('/material',(req,res)=>{
    res.render('Material',{title:'Material'});
})

module.exports=router;