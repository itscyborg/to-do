import mongoose from "mongoose";
import dotenv from "dotenv";

//config function to initilize
dotenv.config();


const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = () => {
  const MONODB_URL = `mongodb+srv://${USERNAME}:${PASSWORD}@todo.zyi0wce.mongodb.net/?retryWrites=true&w=majority`;

  mongoose.connect(MONODB_URL, { useNewUrlParser: true });

  mongoose.connection.on("connected", () => {
    console.log("connected sucess");
  });
  mongoose.connection.on("disconnected", () => {
    console.log("database disconnected");
  });
  mongoose.connection.on("error", () => {
    console.log("Error while connecting with database" + error.message);
  });
};

export default Connection;
