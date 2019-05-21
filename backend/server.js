//npm modules
const express = require('express');
const uuid = require('uuid/v4')
const session = require('express-session')
const FileStore = require('session-file-store')(session);
const bodyParser = require('body-parser');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;


// create the server
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const postRoutes = express.Router();
const PORT = 4000;


let Post = require('./models/Post');

//please connect your own database
mongoose.connect('mongodb://127.0.0.1:27017/todos', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})


app.use(cors());

// add & configure middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


// create the homepage route at '/'
app.get('/', (req, res) => {
    console.log('Inside the homepage callback')
    console.log(req.sessionID)
    res.send(`You got home page!\n`)
  })
  

postRoutes.route('/').get(function(req,res){
    Post.find(function(err,posts){
        if(err){
            console.log(err);
        }else{
            res.json(posts)
        }
    })
})


postRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Post.findById(id, function(err, post) {
        res.json(post);
    });
});



postRoutes.route('/update/:id').post(function(req, res) {
    Post.findById(req.params.id, function(err, post) {
        if (!post)
            res.status(404).send("data not found");
        else
            post.post_title = req.body.post_title;
            post.post_author = req.body.post_author;
            post.post_sub = req.body.post_sub;
            post.post_completed = req.body.post_completed;
            post.rate = req.body.rate;
            post.post_content = req.body.post_content;
            post.comments = req.body.comments;

            post.save().then(todo => {
                res.json('Post updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});


postRoutes.route('/add').post(function(req, res) {
    let post = new Post(req.body);
    post.save()
        .then(post => {
            res.status(200).json({'post': 'post added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new post failed');
        });
});

app.use('/posts',postRoutes);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});