const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Post = new Schema({
    post_title: {
        type: String
    },
    post_author: {
        type: String
    },
    post_sub: {
        type: String 
    },
    post_completed: {
        type: Boolean
    },
    post_rate:{
        type: Number
    },
    post_content:{
        type: String
    },
    rate:{
        type: Number
    },
    comments:[
        {
            content:{type:String},
            rate : {type:Number}
        }
   ]
});

module.exports = mongoose.model('Post', Post);