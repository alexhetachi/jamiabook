const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

//post comment
router.post('/',(req,res)=>{
    const { post_id, user_id, fname, lname, user_img, comment } = req.body
    const newComment = {
        user_id,
        fname,
        lname,
        user_img,
        comment
    }
    const Comment = {
        post_id,
        user_id,
        fname,
        lname,
        user_img,
        comment 
    }
    Post.findOneAndUpdate({_id:post_id}, { $push: { comments: newComment } } )
        .then(comment => {
            // console.log(comment)
            res.json(Comment)
        }).catch(err => {
            console.log(err)
        })
    
})

module.exports = router;