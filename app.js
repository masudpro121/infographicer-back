require('dotenv').config()
const express = require("express");
const app = express();
const cors = require('cors')

const mongoose = require('mongoose');
const whoIs = require('./middleware/whoIs');
const AuthRoute = require('./routes/authRoute');

// const UserRoute = require('./Routes/UserRoute/UserRoute');
// const whoIs = require('./Middleware/whois');

const PORT = process.env.PORT || 8000

app.use(cors())
app.use(express.json())

// app.use('/user', whoIs, UserRoute)
app.use('/auth', AuthRoute)

app.listen(PORT, function () {
    console.log("Listening on port "+PORT);
});

mongoose.connect(process.env.DB)
.then(()=>{
    console.log('Database Connected')
})