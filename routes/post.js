
const express = require("express");
const { body, validationResult } = require('express-validator');
const postController = require("../controllers/post");
const validator = require("../validator")

const routes = express.Router();

routes.get("/", postController.getPosts);
routes.post("/post", validator.createPostValitor, postController.createPost);


module.exports = routes;