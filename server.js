import express from "express"
import dotenv from "dotenv"
import { connect } from "http2";
import cors from "cors"
const app=express();
dotenv.config();



connect().then({
    app.listen(process.env.PORT),()=>{
        console.log("Server Running");
    }
})

