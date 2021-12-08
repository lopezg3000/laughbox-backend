const express = require("express");
const Sequelize = require('sequelize');
const { messages } = require('./models');

const PORT = 3001;

const app = express();

app.get('/messages', async (req, res) => {
    const getMessages = await messages.findAll();
    res.json(getMessages);
});

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.post('/message', async (req, res) => {
    // req.body contains an Object with firstName, lastName, email
    const { user, message } = req.body;
    const newMessage = await messages.create({
        user,
        message
    });

    // Send back the new user's ID in the response:
    res.json({
        id: newMessage.id
    });
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});