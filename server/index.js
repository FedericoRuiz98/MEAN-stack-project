const express = require("express");
const mongoose = require("mongoose");
const config = require("./config/dev");
const User = require("./models/user");
const FakeDB = require("./fake-db");

const usersRoutes = require('./routes/users');

mongoose
  .connect(config.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    const fakeDb = new FakeDB();
    fakeDb.seedDb();
  });

const app = express();

//middlewares
app.use("/api/v1/users/", usersRoutes);

//run server
const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log("Node Server is Running at port:" + PORT);
});
