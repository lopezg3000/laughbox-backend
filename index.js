const express = require("express");
var passport = require("passport");
const Sequelize = require('sequelize');
const { messages } = require('./models');
const cors = require('cors'); //not sure why I need this

const PORT = process.env.PORT;
// const PORT = 3001;
//did it work?
const app = express();
// const session = require('express-session');

app.use(cors()); //not sure why I need this
app.use(express.json()); //needed to parse req.body
app.use(passport.initialize());
// app.use(passport.session());
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const authUser = (request, accessToken, refreshToken, profile, done) => {
    return done(null, profile);
}


app.get('/messages', async (req, res) => {
    const getMessages = await messages.findAll().catch((error) => {
        console.error(error);
    });
    res.json(getMessages);
});

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.post('/message', async (req, res) => {
    // req.body contains an Object with firstName, lastName, email
    try {
        const { user, message } = req.body;
        const newMessage = await messages.create({
            user,
            message
        })

        res.json({
            id: newMessage.id
        });
    } catch (error) {
        console.error(error);
    };

    // Send back the new user's ID in the response:
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

// Google Passport
const clientID = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;

passport.use(new GoogleStrategy({
    clientID,
    clientSecret,
    callbackURL: "https://laughbox-frontend.onrender.com/auth/google/callback",
    // callbackURL: "http://localhost:3001/auth/google/callback",
    // change to localhost to work locally
    passReqToCallback: true
}, authUser));

passport.serializeUser((user, done) => {
    done(null, user)
})



passport.deserializeUser((user, done) => {
    done(null, user)
})

app.get('/auth/google',
    passport.authenticate('google', { scope: ['email', 'profile'] }));

app.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/' }),
    function (req, res) {
        // Successful authentication, redirect home.
        // console.log(req.user);
        // res.redirect('http://localhost:3000/home/' + req.user.name.givenName);
        res.redirect('https://laughbox-frontend.onrender.com/' + req.user.name.givenName);
    });