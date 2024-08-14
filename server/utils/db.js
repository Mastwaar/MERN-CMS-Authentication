require("dotenv").config();

const mongoose = require("mongoose");

const URI = process.env.MONGODB_URI;

// mongoose.connect(URL);

const connectDb = async () => {
    try {
        // ** Connecting to the Database
       await mongoose.connect(URI);
        console.log("Database Successfully connected");
    }
    catch(err) {
        console.error(err);
        process.exit(0);
    }
};

module.exports = connectDb;