const Jwt = require('jsonwebtoken')
const User = require("./models/User.js");
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const secret = 'secret123';
async function startServer() {
    app.use(cors({
        origin: 'http://localhost:3000',
        credentials: true
    }));
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(cookieParser());
    await mongoose.connect('mongodb://localhost:27017/localert', { useNewUrlParser: true, useUnifiedTopology: true });
    const db = mongoose.connection;
    db.on('error', console.log);
    app.get('/', (req, res) => {
        res.send('hi')
    });
    app.post('/signup', (req, res) => {
        const { username, email, password, location } = req.body;
        const user = new User({ username, email, password, location });
        user.save().then(user => {
            Jwt.sign({ id: user._id }, secret, (err, token) => {
                if (err) {
                    console.log(err);
                    res.sendStatus(500);
                } else {
                    res.status(201).cookie('token', token).send();
                }
            })
            res.sendStatus(201);
        }).catch(e => {
            console.log(e);
            res.sendStatus(500);
        })
    });
    app.get('/user', (req, res) => {
        const token = req.cookies.token;
        const userInfo = Jwt.verify(token, secret);
        User.findById(userInfo.id)
            .then(user => {
                res.json({username: user.username});
            }).catch(e => {
                console.log(e);
                res.sendStatus(500);
            })
    })
    app.post('/logout', (req, res) => {
        res.cookie('token', '').send();
    })
    app.listen(4000);
}
startServer();