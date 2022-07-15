const express = require('express');
const app = express();
const bcrypt = require('bcryptjs');
const cors = require('cors');
const knex = require('knex');
const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


const db = knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    port : 5432,
    user : 'postgres',
    password : 'test',
    database : 'smartbrain'
  }
});


app.get('/', (req, res) => {res.send('success')});

// Action for Signing In 
app.post('/signin', (req, res) => {signin.handleSignIn(req, res, db, bcrypt)});


// Action when registering into site
app.post('/register', (req, res) => {register.handleRegister(req, res, db, bcrypt)});


// Action for checking if user exists
app.get('/profile/:id', (req, res) => {profile.handleProfileGet(req, res, db)});


// Action for checking images
app.put('/image', (req, res) => {image.handleImagePut(req, res, db)});
//app.post('/imageurl', (req, res) => {image.handleApiCall(req, res, db)});



app.listen(4000, () => {
	console.log('App is running on port 4000');
})