const express = require('express');
const app = express();
const cors = require('cors');
require("dotenv").config();
const mongoClient = require('mongodb').MongoClient;

app.use(cors());

// Middleware
app.use(express.json());
//app.use(cors({ origin: 'http://localhost:3001' }));

// Connect DB
mongoClient.connect(process.env.MONGO_URI)
.then(client => {
    const vnr = client.db('vnr');
    const userscollection = vnr.collection('userscollection');
    app.set('userscollection', userscollection);
    console.log("DB connection success");
})
.catch(err => console.log("Err in DB connection", err));



const userApp = require('./api/user-api');


// Import and mount API routes
app.use('/user-api',userApp);


// Start server
const port = process.env.PORT || 3000; // Use port 3000 by default if PORT environment variable is not set
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

