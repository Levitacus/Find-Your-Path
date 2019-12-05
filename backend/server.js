const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

//Allows us to use dotenv file for environmental vars
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

//middleware
//cors allows us to request cross origin files
app.use(cors());
//in this case we're getting json files
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, 
  { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true}
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection opened successfully.");
});

//const charactersRouter = require('./routes/characters');
//const encountersRouter = require('./routes/encounters');
const usersRouter = require('./routes/users');
//import * as usersRouter from 'routes/users';
//app.use('/characters', charactersRouter);
//app.use('/encounters', encountersRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});