const express = require("express");

const dotenv = require("dotenv");

const connectDatabase = require("./helpers/database/connectDatabase");

const customErrorHandler = require("./middlewares/errors/CustomErrorHandler");

const path = require("path");

const routers = require("./routers");



//Enviroment Variables
dotenv.config({
    path : "./config/env/config.env"
})

//MongoDb Connection 
connectDatabase();

const app = express();

//Express - Body Middleware

app.use(express.json());

const PORT = process.env.PORT; //bulunduğu portu gösterir

//Routers Middleware

app.use("/api",routers);

//Error Handler

app.use(customErrorHandler);

//Static Files 
//Program bunları bulamaz yerini belirtmemiz gerekir
app.use(express.static(path.join(__dirname,"public")));

app.listen(PORT , () =>{
    console.log(`App Started on ${PORT} : ${process.env.Node_ENV}`);
})