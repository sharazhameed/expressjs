// Setup

const express = require("express");
const userRouter = require("./router/user");
const movierouter = require("./router/movies");

const app = express();

app.use("/", movierouter);
app.use("/", userRouter);

app.listen(3001, () => {
  console.log("Server started 1.");
});
