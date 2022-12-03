//Import the express module
const express = require('express')

//import Routes from app.js
// const app = require('./app.js')
const app = express();

//import mongoose module
const mongoose = require('mongoose')

//Declare a specific listening port number
// const port = 3000
const PORT = process.env.PORT || 3000;

// Wide listing a cors to accept a specific domain route
const cors = require('cors');
const subscriberRouter = require('./app');
// const { response } = require('./app.js');

// Parse JSON bodies (as sent by API clients)
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

//enable cors usage
app.use(cors());

app.use("/api", subscriberRouter);

// Connect to DATABASE
// const DATABASE_URL = "mongodb://localhost/subscribers";
const DATABASE_URL ="mongodb+srv://parvez131037:ap131037@cluster0.0wkyvor.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(DATABASE_URL,{ useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open', () => console.log('connected to database'))


//app.listen() function which Binds and listens for connections on the specified host and port.
app.listen(PORT, () => console.log(`App listening on port ${PORT}!`))


//for testing
module.exports = app;
