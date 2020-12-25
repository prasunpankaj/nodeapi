
const express = require("express");
const {getPosts, createPost} = require("../controllers/post");
const {createPostValitor} = require("../validator")

const routes = express.Router();

routes.get("/", getPosts);
routes.post("/post", createPostValitor, createPost);


module.exports = routes;