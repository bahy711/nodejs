const mongoose = require("mongoose");
const Joi = require("joi");

const mongooseSchema = new mongoose.Schema({
    title: { type: String, required: true },
   body: { type: String, required: true },
})

const joiSchema = Joi.object({
    title : Joi.string().required(),
    body: Joi.string().min(20).max(200).required(),
})

const Post = mongoose.model("Post", mongooseSchema);

exports.add = (post) => new Post(post).save();
exports.getAll = () => Post.find();
exports.getOne = (id) => Post.findById(id);
exports.edit = (id, post) => Post.findByIdAndUpdate(id, post);
exports.remove = (_id) => Post.findOneAndDelete({_id});

exports.validate = (post)=> joiSchema.validate(post);