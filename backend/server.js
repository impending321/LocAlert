const Jwt = require('jsonwebtoken')
const User = require("./models/User.js");
const Post = require('./models/Post.js');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
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
    app.post('/signup', async (req, res) => {
        const { username, email, password, location } = req.body;
        User.findOne({ username }).then(existingUser => {
            if (existingUser) {
                return res.sendStatus(422);
            }
            User.findOne({ email }).then(existingEmail => {
                if (existingEmail) {
                    return res.sendStatus(422);
                }
                const user = new User({ username, email, password, location });
                user.save().then(newUser => {
                    Jwt.sign({ id: newUser._id }, secret, (err, token) => {
                        if (err) {
                            console.log(err);
                            return res.sendStatus(500);
                        }
                        res.status(201).cookie('token', token).send();
                    });
                }).catch(e => {
                    console.log(e);
                    res.sendStatus(500);
                });
            });
        });
    });
    app.get('/username', async (req, res) => {
        const token = req.cookies.token;
        const userInfo = Jwt.verify(token, secret);
        User.findById(userInfo.id)
            .then(user => {
                res.json({ username: user.username });
            }).catch(e => {
                console.log(e);
                res.sendStatus(500);
            })
    })
    app.get('/location', async (req, res) => {
        const token = req.cookies.token;
        const userInfo = Jwt.verify(token, secret);
        User.findById(userInfo.id)
            .then(user => {
                res.json({ location: user.location });
            }).catch(e => {
                console.log(e);
                res.sendStatus(500);
            })
    })
    app.post('/logout', async (req, res) => {
        res.cookie('token', '').send();
    })
    app.post('/login', async (req, res) => {
        const { username, password } = req.body;
        User.findOne({ username }).then(user => {
            if (user && user.username) {
                const match = (password === user.password) ? true : false;
                if (match) {
                    Jwt.sign({ id: user._id }, secret, (err, token) => {
                        if (err) {
                            console.log(err);
                            res.sendStatus(500);
                        } else {
                            res.cookie('token', token).send()
                        }
                    })
                } else {
                    res.status(422).json('Invalid Username or Password');
                }
            } else {
                res.status(422).json('Invalid Username or Password');
            }
        });
    })
    app.post('/posts', upload.single('image'), async (req, res) => {
        const { author, category, description, location } = req.body;
        const image = req.file;
        const date = new Date();
        const post = new Post({
            author,
            category,
            description,
            location,
            image: {
                data: image.buffer,
                contentType: image.mimetype
            },
            date
        });
        post.save().then(post => {
            res.sendStatus(201);
        }).catch(e => {
            console.log(e);
            res.sendStatus(500);
        })
    });
    app.post('/changelocation', async (req, res) => {
        const { username, location } = req.body;
        User.updateOne({ username: username }, { location: location })
            .then(result => {
                if (result.nModified > 0) {
                    res.sendStatus(200);
                } else {
                    res.sendStatus(404);
                }
            })
            .catch(error => {
                console.error('Error updating user:', error);
            })
    });
    app.listen(4000);
    }
startServer();