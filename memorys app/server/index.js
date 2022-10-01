import bodyParser from "body-parser";
import mongoose from 'mongoose';
import express  from "express";
import cors from 'cors';
import router from "./route/post.js";

const app = express()
app.use('/post', router)

app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))
app.use(cors())



const CNNECTIONURL = 'mongodb+srv://jestinxaviermemeory:developer@cluster0.5behn.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000


mongoose.connect(CNNECTIONURL,{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>app.listen(PORT,()=>console.log(`server running on ${PORT}`)))
.catch((error)=>console.log(error.message))


// ---- It's a deprecated now. // No longer necessary: ----

// mongoose.set("useFindAndModify",false);

