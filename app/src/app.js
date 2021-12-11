const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require("mongoose");
require('dotenv').config({path:__dirname+'/./../../.env'})

mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASS}@cluster0.jcotz.mongodb.net/${process.env.DB_NAME}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//middleware
app.use(cors());
app.use(express.json());

const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Connected"));

let clientRouter = require("./routes/clients");
let physioRouter = require("./routes/physios");
let sessionRouter = require("./routes/sessions")

//endpoints
app.use('/clients', clientRouter);
app.use('/physios', physioRouter);
app.use('/sessions', sessionRouter);

//server listens
app.listen(5000, () => {
  console.log(`Server is running on port 5000`);
});
