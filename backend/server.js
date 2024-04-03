const Jwt = require('jsonwebtoken')
const User = require("./models/User.js");
const Post = require('./models/Post.js');
const Notifications = require('./models/Notifications.js');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const secret = 'secret123';

async function startServer() {
    app.use(cors({
        origin: 'http://localhost:3000',
        credentials: true
    }));
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(cookieParser());
    app.use(express.static('uploads'));
    
    await mongoose.connect('mongodb://localhost:27017/localert', { useNewUrlParser: true, useUnifiedTopology: true });
    const db = mongoose.connection;
    db.on('error', console.log);
    
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
        },
        filename: (req, file, cb) => {
            cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
        }
    });
    const upload = multer({ storage });
    
    app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
    
    app.post('/signup', async (req, res) => {
        const { username, email, password, location } = req.body;
        try {
            const existingUser = await User.findOne({ username });
            if (existingUser) {
                return res.sendStatus(422);
            }
            const existingEmail = await User.findOne({ email });
            if (existingEmail) {
                return res.sendStatus(422);
            }
            const user = new User({ username, email, password, location });
            const newUser = await user.save();
            const token = Jwt.sign({ id: newUser._id }, secret);
            res.status(201).cookie('token', token).send();
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    });
    
    app.get('/username', async (req, res) => {
        const token = req.cookies.token;
        try {
            const userInfo = Jwt.verify(token, secret);
            const user = await User.findById(userInfo.id);
            res.json({ username: user.username });
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    });
    
    app.get('/location', async (req, res) => {
        const token = req.cookies.token;
        try {
            const userInfo = Jwt.verify(token, secret);
            const user = await User.findById(userInfo.id);
            res.json({ location: user.location });
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    });
    
    app.post('/logout', async (req, res) => {
        res.cookie('token', '').send();
    });
    
    app.post('/login', async (req, res) => {
        const { username, password } = req.body;
        try {
            const user = await User.findOne({ username });
            if (!user || password !== user.password) {
                return res.status(422).json('Invalid Username or Password');
            }
            const token = Jwt.sign({ id: user._id }, secret);
            res.cookie('token', token).send();
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    });
    
    app.post('/posts', upload.single('image'), async (req, res) => {
        const { author, category, description, location } = req.body;
        const date = new Date();
        const post = new Post({
            author,
            category,
            description,
            location,
            image: {
                filename: req.file.filename,
                path: req.file.path
            },
            date
        });
        try {
            await post.save();
            res.sendStatus(201);
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    });
    
    app.get('/posts', async (req, res) => {
        const { category, location } = req.query;
        try {
            const posts = await Post.find({ category, location }).select({ author: 1, description: 1, likes: 1, image: 1 }).sort({ likes: -1 });
            res.status(200).json(posts);
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    });
    
    app.post('/changelocation', async (req, res) => {
        const { username, location } = req.body;
        try {
            const result = await User.updateOne({ username: username }, { location: location });
            if (result.nModified > 0) {
                res.sendStatus(200);
            } else {
                res.sendStatus(404);
            }
        } catch (error) {
            console.error('Error updating user:', error);
            res.sendStatus(500);
        }
    });
    
    app.post('/likes', async (req, res) => {
        const { id, username } = req.body;
        try {
            const notif = await Notifications.findOne({ postId: id, by: username });
            if (notif) {
                return res.status(200).json('Already liked');
            }
            await Post.updateOne({ _id: id }, { $inc: { likes: 1 } });
            res.sendStatus(200);
        } catch (error) {
            console.error(error);
            res.sendStatus(500);
        }
    });
    
    app.post('/notif', async (req, res) => {
        const { id, username } = req.body;
        try {
            const notifs = await Notifications.findOne({ postId: id, by: username });
            if (notifs) {
                return res.status(200).json('Already liked');
            }
            const post = await Post.findById(id).select('author');
            if (!post) {
                return res.sendStatus(404);
            }
            const author = post.author;
            const notif = new Notifications({ author: author, by: username, date: new Date(), postId: id });
            await notif.save();
            res.sendStatus(200);
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    });
    
    app.get('/notif', async (req, res) => {
        const { author } = req.query;
        try {
            const notifications = await Notifications.find({ author }).sort({ date: -1 });
            res.status(200).json(notifications);
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    });
    
    app.listen(4000);
}

startServer();
