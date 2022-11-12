const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const {createElement, getElementById, getIndexById, updateElement} = require('./utils');

const total_budget = 0;
let envelopes = [];

app.use(bodyParser.json());

const PORT = process.env.PORT || 3001;

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

app.put('/envelopes/:id', (req, res, next) => {
    const envelopeIndex = getIndexById(req.params.id, envelopes);
    if (envelopeIndex !== -1){
        updateElement(req.params.id, req.body, envelopes);
        if (req.body.hasOwnProperty('spent')) {
            (envelopes[envelopeIndex]).budget = Number((envelopes[envelopeIndex]).budget) - Number(req.body.spent);
        }
        res.send(envelopes[envelopeIndex]);
    }
    else {
        res.status(404).send();
    }
    next();
});

app.delete('/envelopes/:id', (req, res, next) => {
  const envelopeIndex = getIndexById(req.params.id, envelopes);
  if (envelopeIndex !== -1) {
    envelopes.splice(envelopeIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).send();
  }
});

app.post('/envelopes/transfer/:from/:to', (req, res, next) => {
    const envelopeOneIndex = getIndexById(req.params.from, envelopes);
    const envelopeTwoIndex = getIndexById(req.params.to, envelopes);
    if (envelopeOneIndex !== -1 && envelopeTwoIndex !== -1){
        (envelopes[envelopeOneIndex]).budget = Number((envelopes[envelopeOneIndex]).budget) - Number(req.header('transferAmount'));
        (envelopes[envelopeTwoIndex]).budget = Number((envelopes[envelopeTwoIndex]).budget) + Number(req.header('transferAmount'));
        //res.send(envelopes[envelopeOneIndex], envelopes[envelopeTwoIndex]);
        res.status(200).send();
    }
    else {
        res.status(404).send();
    }
    next();
});


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});