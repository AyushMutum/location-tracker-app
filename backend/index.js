import cors from "cors";
import mongoose from "mongoose";
import  express from "express";
import dotenv from "dotenv";

import userRoute from './routes/users.js';
import authRoute from './routes/auth.js';


dotenv.config();

const app = express();
const port = process.env.PORT || 8000;


//database connection
mongoose.set('strictQuery', false);
const connect = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Error connecting to MongoDB", error);
    }
}

//middleware
app.use(cors());
app.use(express.json());

app.use('/api/v1/auth', authRoute);
app.use('/api/v1/users', userRoute);


app.listen(port,() =>{
    connect();
    console.log('server listening on port', port);

});


