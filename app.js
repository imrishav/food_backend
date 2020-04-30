const express = require("express");

const app = express();
const morgan = require("morgan");

const userRouter = require("./routes/userRoutes");
const resturantRouter = require("./routes/resturantRoutes");

app.use(morgan("dev"));
app.use(express.json());

app.use("/api/v1/users", userRouter);
app.use("/api/v1/resturants", resturantRouter);

module.exports = app;
