import cors from "cors";
import mongoose from "mongoose";
import  express from "express";
import dotenv from "dotenv";


dotenv.config();

const app = express();


//database connection
mongoose.set('strictquery', false);
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


app.listen(port,() =>{
    connect();
    console.log('server listening on port', port);

});


