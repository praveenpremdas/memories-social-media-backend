import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import Mongoose from "mongoose";
import postRoutes from "./routes/posts.js";

const app = express();
app.use("/posts", postRoutes); // /posts enna url vanna posts.js ill pokum

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const CONNECTION_URL =
  "mongodb+srv://praveen:Sreekrishna%401@cluster0.bp8wt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"; //mongo db atlas (url of database)

const PORT = process.env.PORT || 5000;

Mongoose.connect(CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true, //connect with database
})
  .then(
    () => app.listen(PORT, () => console.log(`Server Running On Port ${PORT}`)) // database connect ayal sever listen cheyum
  )
  .catch((error) => console.log(error.message)); //DB connect ayillakill error print cheyum
