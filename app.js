const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const {createElement, getElementById} = require('./utils');

const total_budget = 0;
let envelopes = [];

app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

app.get('/', (req, res, next) => {
    res.send('Hello, World');
    next();
});


app.post('/envelopes', (req, res, next) => {
    const receivedEnvelope = createElement(req.body);
    if (receivedEnvelope) {
        envelopes.push(receivedEnvelope);
        res.status(201).send(receivedEnvelope);
    } else {
        res.status(400).send();
    }
    next();
});


app.get('/envelopes', (req, res, next) => {
    res.send(envelopes);
    next();
});

app.get('/envelopes/:id', (req, res, next) => {
    const foundEnvelope = getElementById(req.params.id, envelopes);
    if (foundEnvelope) {
        res.send(foundEnvelope);
    } else {
        res.status(404).send();
    }
    next();
});



app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})