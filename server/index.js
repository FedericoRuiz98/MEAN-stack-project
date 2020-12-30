const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const app = express();

const config = require("./config/dev");
const User = require("./models/user");

//instance users in the db
const FakeDB = require("./fake-db");

//routes
const usersRoutes = require('./routes/users');
const indexRoutes = require('./routes/index');

//middlewares
app.use(bodyParser.json());
const baseUrl = "/api/v1";
app.use(baseUrl, indexRoutes);
app.use(baseUrl+"/users/", usersRoutes);

//connect db
mongoose
  .connect(config.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    //const fakeDb = new FakeDB();
    //fakeDb.seedDb();
  });

//run server
app.listen(process.env.PORT, function () {
  console.log("Node Server is Running at port:" + process.env.PORT);
});
