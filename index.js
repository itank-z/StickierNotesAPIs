const express = require('express');
const mongoose = require('mongoose');
const Users = require('./app/Controllers/Users');

const app = express();
const port = 3000;

app.get('/health', (req, res) => {
    res.send('Healthy').status(200);
});

app.get('/fetch', (req, res) => {
    Users.fetch()
        .then((data) => {
            res.send({
                data,
            }).status(200);
        })
        .catch(err => {
            console.log('Error in route:', err);
            res.send({
                err,
            }).status(500);
        })

});

const connectDB = async () => {
    // replace with cluster connectivity string
    const connectivityString = 'mongodb://localhost:27017/test';
    return mongoose.connect(connectivityString, { useNewUrlParser: true });
}

connectDB()
    .then((result) => {
        console.log('Successfully connected to db');
        app.listen(port, () => {
            console.log(`App listening on port ${port}`);
        });
    })
    .catch(err => {
        console.log('Error connecting to db:', err);
    })

