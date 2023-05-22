import mongoose from 'mongoose'
import dotenv from 'dotenv';


//config function to initilize
dotenv.config();


const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = () => {
  const MONGODB_URI = `mongodb+srv://${USERNAME}:${PASSWORD}@todo.zyi0wce.mongodb.net/?retryWrites=true&w=majority`;

  mongoose.connect(MONGODB_URI, { useNewUrlParser: true,useUnifiedTopology: true, });
 
  mongoose.connection.on("connected", () => {
    console.log("connected success");
  });
  mongoose.connection.on("disconnected", () => {
    console.log("database disconnected");
  });
  mongoose.connection.on("error", (error) => {
    console.log("Error while connecting with database" + error.message);
  });
};

export default Connection;
