const express = require('express');
const userApp = express.Router();
const bcryptjs = require('bcryptjs');
const expressAsyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const { ObjectId } = require('mongodb');
require('dotenv').config();

let usersCollection;


userApp.use((req, res, next) => {
  usersCollection = req.app.get('userscollection');

  if (!usersCollection) {
    return res.status(500).send({ error: 'Database connection error' });
  }
  req.usersCollection = usersCollection;
  next();
});

// Middleware to verify token
function verifyToken(req, res, next) {
  const bearerToken = req.headers.authorization;
  if (!bearerToken || !bearerToken.startsWith('Bearer ')) {
    return res.status(401).send({ message: 'Authorization header missing or malformed' });
  }
  const token = bearerToken.split(' ')[1];
  try {
    jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (err) {
    console.error('Error verifying token:', err);
    return res.status(401).send({ message: 'Invalid or expired token' });
  }
}


// User registration
userApp.post('/user', expressAsyncHandler(async (req, res) => {
  const newUser = req.body;
  const dbuser = await usersCollection.findOne({ email: newUser.email });
  if (dbuser != null) {
    res.send({ message: "User existed" });
  } else {
    const hashedPassword = await bcryptjs.hash(newUser.password, 6);
    newUser.password = hashedPassword;
    await usersCollection.insertOne(newUser);
    res.send({ message: "User created" });
  }
}));

// User login
userApp.post('/login', expressAsyncHandler(async (req, res) => {
  const userCred = req.body;
  const dbuser = await usersCollection.findOne({ email: userCred.email });

  if (dbuser == null) {
    res.send({ message: "Invalid email" });
  } else {
    const status = await bcryptjs.compare(userCred.password, dbuser.password);
    if (status === false) {
      res.send({ message: "Invalid Password" });
    } else {
      try {
        const signedToken = jwt.sign({ email: dbuser.email, userId: dbuser._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
        res.send({ message: "Login Success", token: signedToken, userId: dbuser._id, user: dbuser });
      } catch (error) {
        console.error('Error generating JWT token:', error);
        res.status(500).send({ message: 'Internal server error' });
      }
    }
  }
}));



module.exports = userApp;
