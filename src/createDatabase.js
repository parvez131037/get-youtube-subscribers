// Import the mongoose module
const mongoose = require('mongoose')

// Import the schema model
const subscriberModel = require('./models/subscribers')

//import schema type
const data = require('./data')

// Connect to DATABASE
// const DATABASE_URL = "mongodb://localhost/subscribers";
// Set up default mongoose connection
const DATABASE_URL = "mongodb+srv://parvez131037:ap131037@cluster0.0wkyvor.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(DATABASE_URL,{ useNewUrlParser: true, useUnifiedTopology: true });

// Get the default connection
const db = mongoose.connection

// Bind connection to error event (to get notification of connection errors)
db.on('error', (err) => console.log(err))
db.once('open', () => console.log('Database created...'))


//Refresh all hosts.
//Equivalent to refreshUntilMatches with a criteria that never matches.
//This is intended to be called periodically, possibly from a background thread.
const refreshAll = async () => {
    await subscriberModel.deleteMany({})
    // console.log(connection)
    await subscriberModel.insertMany(data)
    await mongoose.disconnect();
}
refreshAll()
