const express = require('express');
const path = require('path');
const app = express();
const port = 5000;

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'Templates','index.html'));
});


app.listen(port,()=>{
    console.log(`Server on port ${port}`)
})