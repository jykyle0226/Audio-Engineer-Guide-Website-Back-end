// Dependencies
const express = require('express');
const app = express();
require('dotenv').config();
const router = express.Router();
const PORT = process.env.PORT
const { redirect } = require('express/lib/response')
const mongoose = require('mongoose')
const db = mongoose.connection
const dotenv = require('dotenv')
require('dotenv').config()
const cors = require("cors");
const morgan = require("morgan");
const admin = require('firebase-admin')
const credentials = require('./serviceAccountKey.json')

admin.initializeApp({
  credential: admin.credential.cert(credentials)
})


// Mongo Status Listeners
mongoose.connect(process.env.DATABASE_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));


// Mount MiddleWare
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// Controllers MiddleWare
// app.use(seedPlanter);
// app.use(activitiesController);
// app.use(locationsController);



// Route
app.get("/", (req, res) => {
  res.send("Greetings");
});

// Express Listener
app.listen(PORT, () => {
  console.log.apply(`Express is listening on PORT: ${PORT}`);
});
