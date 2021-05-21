const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
// const auth = require('../middleware/auth')


router.post('/', (req,res) => {
    let { page, limit } = req.body
    const pageno = Number(page)
    const limitno = Number(limit)
    console.log("page: "+page+" limit: "+limit)
    Post.find({})
        .sort({ Date: -1 })
        .skip(limitno*pageno) //check for Number
        .limit(limitno) // check for Number
    .then(posts => {
        // console.log(posts[0])
        res.json(posts)
    })
    .catch(err => {
        res.status(400).json({msg:err})
    })

})

module.exports = router;