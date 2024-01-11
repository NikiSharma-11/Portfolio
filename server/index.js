import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from "./db.js";
import contactRoute from './routes/contactRoute.js'



//dotenv configuration
dotenv.config();  //confidencial variable ko lagi yo first mai call garnu parxa just after import statement

//rest object
const app= express();
connectDB();

//middlewares
app.use(cors());
app.use(express.json()); 

//routes
// app.get('/',(req, res)=>{
//     res.send('<h1>Welcome to node server</h1>')
// })

app.use('/api/v1/contact', contactRoute);

const port=process.env.PORT;

app.listen(port,()=>{
    console.log(`Server is running at port ${port}`)
})