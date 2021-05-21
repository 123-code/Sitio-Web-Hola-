const express = require('express');
const path = require('path');
const app = express();
const port = 5000;
const ejs = require('ejs');



app.set('view engine', 'ejs');
app.engine('html',require('ejs').renderFile);
app.set('views',path.join(__dirname,'views'));

app.use(require('./Routes/routes'));



app.listen(port,()=>{
    console.log(`Server on port ${port}`)
})