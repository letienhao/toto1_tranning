const express = require('express');
const app = express();
const { PORT } = require('./config');
const connectDb = require('./config/db');
const bodypaser = require("body-parser");
app.use(bodypaser.urlencoded({extended:true}));
app.use(bodypaser.json())
const router = require('./router/userRouter');
const catchError = require('./midlleware/Error');

app.use(express.json())

//connect db
connectDb();
app.use('/api',router)

app.use(catchError)

app.listen(PORT,()=>{
    console.log(`server is running port ${PORT}`);
})