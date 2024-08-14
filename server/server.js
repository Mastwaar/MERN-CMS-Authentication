require("dotenv").config();
const express = require('express');
const cors = require("cors");
const app = express();
const authRoute = require("./routes/user-auth");
const contactRoute = require("./routes/contact-router");
const serviceRoute = require("./routes/service-router");
const connectDb = require('./utils/db');
const errorMiddleware = require("./middlewares/error_middleware");

// Let's tackle CORS

const corsOptions = {
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
}


app.use(cors(corsOptions));


app.use(express.json());

app.use('/api/auth',authRoute);
app.use("/api/form", contactRoute);
app.use("/api/data", serviceRoute );

app.use(errorMiddleware);

const PORT = 5000;

connectDb().then( () => {
    app.listen(PORT, () => {console.log(`Server is running at ${PORT}`);
});
});
// // 9KB0R1Fx42qw5rnN

