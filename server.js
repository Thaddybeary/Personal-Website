require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { connect, disconnect } = require('./config/dbConfig');
const session = require('express-session');
const authRoutes = require('./routes/authRoutes');
const bioTextRoutes = require('./routes/bioTextRoutes')

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, maxAge: 3600000 } // Set to true if using HTTPS
}));
app.use(cors({
  origin: 'http://localhost:3000', // Only allow requests from this origin
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}));
app.use('/auth', authRoutes);
app.use('/bioText', bioTextRoutes)

async function startServer() {
    try {
        const dbClient = await connect();
        app.locals.db = dbClient;
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });

    } catch (error) {
        console.error("Failed to start the server:", error);
        process.exit(1);
    }
}

function handleExit(options, err) {
  if (options.cleanup) {
      console.log('cleaning up');
      disconnect();
  }
  if (err) console.error(err);
  if (options.exit) process.exit();
}

// Do something when app is closing
process.on('exit', handleExit.bind(null, {cleanup: true}));

// Catches ctrl+c event
process.on('SIGINT', handleExit.bind(null, {cleanup: true, exit: true}));

// Catches "kill pid" (for example: nodemon restart)
process.on('SIGUSR1', handleExit.bind(null, {exit: true}));
process.on('SIGUSR2', handleExit.bind(null, {exit: true}));

// Catches uncaught exceptions
process.on('uncaughtException', handleExit.bind(null, {exit: true}));

startServer();
