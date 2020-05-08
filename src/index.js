const express = require('express');
require("./db/mongoose");
const mongoose = require('mongoose');
const app = express();
const User = require('./models/user');

const PORT = process.env.PORT;

app.use(express.json());

app.post('/signup', async (req, res) => {

    const user = new User(req.body);
    try{
        await user.save();
        const token = await user.generateAuthToken();
        res.status(201).send({user, token});
    } catch(error){
        res.status(400).send(error)
    }
})

app.post('/login', async (req, res) => {
    try{
    const user = User.findOne({email: req.body.email, password: req.body.password})
    const token = await user.generateAuthToken();
    res.send({user, token});
    } catch(e){
        res.status(400).send(e);
    }
})

app.listen(PORT, () => {
    console.log("The port is running!")
})