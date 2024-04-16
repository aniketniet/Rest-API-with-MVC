const express = require("express");
const userRouter = require("./routes/user");
const { connectDbAtlas } = require("./connection");
const { logReqRes } = require("./middleware");
const conUrl =
  "mongodb+srv://aniket:aniket@cluster0.nacej66.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const app = express();
const PORT = 8000;

//connect with atlas mongodb
connectDbAtlas(conUrl)
  .then(() => {
    console.log("Connected to MongoDB Atlas");
  })
  .catch((err) => {
    console.log("Error: ", err);
  });

// schema and model

// built-in Middleware
app.use(express.urlencoded({ extended: false }));

//user defined Middleware
app.use(logReqRes("log.txt"));
// for api

app.use("/users", userRouter);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
