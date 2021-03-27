const mongoose = require("mongoose");
const Joi = require("joi");

const mongooseSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    address: { type: String, required: true },
})

const joiSchema = Joi.object({
    firstName : Joi.string().alphanum().min(3).max(20).required(),
    lastName : Joi.string().alphanum().min(3).max(20).required(),
    address : Joi.string().min(3).max(20).required()
})

const User = mongoose.model("User", mongooseSchema);

exports.add = (user) => new User(user).save();
exports.getAll = () => User.find();
exports.getOne = (id) => User.findById(id);
exports.edit = (id, user) => User.findByIdAndUpdate(id, user);
exports.remove = (_id) => User.findOneAndDelete({_id});

exports.validate = (user)=> joiSchema.validate(user);