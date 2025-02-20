const express = require('express');
const app = express();
const userModel = require('./models/user');
const postModel = require('./models/post');

app.get("/", function (req, res) {
  res.send("Hey");
})

app.get("/create", async function (req, res) {
    let user = await userModel.create({
        username: "John Doe",
        age: 25,
        email: "john@gmail.com"
    });

    res.send(user);
})

app.get("/post/create", async function (req, res) {
    let post = await postModel.create({
        postdata: "This is a post",
        user: "60c9d4d8c6c8b1f8e8a8f0b6"
    })

    let user = await userModel.findOne({ _id: "60c9d4d8c6c8b1f8e8a8f0b6" });
    user.posts.push(post._id);
    await user.save();
    res.send(post, user);
})

app.listen(3000);