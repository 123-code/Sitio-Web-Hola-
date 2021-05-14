const express = require('express');
const path = require('path');
const app = express();
const port = 5000;
const ejs = require('ejs');


//app.use(require('./Routes/'));
app.set('view engine', 'ejs');
app.engine('html',require('ejs').renderFile);



app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','index.html'));
});


app.get('/contacto',(req,res)=>{
    res.render('contact',{title:'Contactanos'});
});


app.listen(port,()=>{
    console.log(`Server on port ${port}`)
})
