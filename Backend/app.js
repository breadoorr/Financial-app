const express = require('express');
const cors = require('cors');
const {db} = require("./db/db");
const {readdirSync} = require('fs');
const cookieParser = require('cookie-parser');
const {requireAuth} = require("./middleware/authMiddle");

const app = express();

require('dotenv').config();

const PORT = process.env.PORT;

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000',  // Adjust this to match the client's URL
    credentials: true,
}));
app.use(cookieParser());

readdirSync('./routes').map((route) => app.use('/', require('./routes/' + route)));

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.get('/validate', requireAuth, (req, res) => {
    res.status(200).send('Session is valid');
});

const server = () => {
    db();
    app.listen(PORT, () =>
    {
        console.log('Listening', PORT);
    })
}

server();