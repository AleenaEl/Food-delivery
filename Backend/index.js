// we use express server which is based on module so we using ES6 feature
// so we include type: module in the package.json file to use import function from es6 module system
// commonjs uses the require fun

//always tries to keep the dotenv at top of all other file 
import 'dotenv/config'
import express from "express"
import cors from 'cors'
import { connectDB } from "./config/db.js"
import foodRouter from './routes/foodRoute.js'
import userRouter from './routes/userRoute.js'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'


// app config
const app = express()
const port=3000

// middleware
// this middleware is used to parse the request frpm frontend to backend
app.use(express.json())
app.use(cors())

// api endponts
// separate route files 
app.use("/food", foodRouter)
// to access the images in the frontend
app.use("/images", express.static('uploads'))
app.use('/user', userRouter);
app.use("/cart",cartRouter)
app.use("/order",orderRouter)

// DB connection
connectDB();



// its http method to fetch datta from backend
app.get("/",(req,res)=> {
    res.send("API is Working")
})
// to run th eexpress server
app.listen(port,()=> {
    console.log(`Server started on http://localhost:${port}`);
})