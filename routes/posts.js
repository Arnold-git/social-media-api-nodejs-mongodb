const router = require("express").Router();
const Post = require("../models/Post")

// create a post
router.post("/", async(req, res) =>{
    const newPost = new Post(req.body)
    try{
        const savePost = await newPost.save();
        res.status(200).json(savePost);
    }catch(err){
        res.status(500).json(err)
    }
});

// update a post 
router.put("/:id", async(req, res)=> {
    const post = Post.findById(req.params.id);
    if(post.userId === req.body.userId){

    }else{
        res.status(403).json("You can update only your post")
    }

});

module.exports = router;