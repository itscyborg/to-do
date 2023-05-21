import mongoose from "mongoose";

const Connection = () => {
  const MONODB_URL =
    "mongodb+srv://todo:1234@todo.zyi0wce.mongodb.net/?retryWrites=true&w=majority";
  mongoose.connect(MONODB_URL, { useNewUrlParser: true });

  mongoose.connection.on("connected", () => {
    console.log("connected sucess");
  });
  mongoose.connection.on("disconnected", () => {
    console.log("database disconnected");
  });
  mongoose.connection.on("error", () => {
    console.log("Error while connecting with database");
  });
};

export default Connection;
