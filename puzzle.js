const puzzle = require('../model/puzzle');
const CATEGORY = require("../model/categoty");

exports.CreateCategory = async function (req, res, next) {
  try {
    console.log(req.body);
    console.log(req.file);
    req.body.image = req.file.filename
    if (!req.body.name || !req.body.image) {
      throw new Error("Please enter valid fields");
    }
    const data = await CATEGORY.create(req.body);
    res.status(201).json({
      status: "success",
      message: "category created",
      data: data,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message,
    });
  }
};

exports.GetCategory = async function (req, res, next) {
  try {
    const data = await CATEGORY.find();
    res.status(200).json({
      status: "success",
      message: "users get",
      data: data,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message,
    });
  }
};

exports.CreatePuzzle = async function (req, res, next) {
  try {
    if (
      !req.body.image ||
      !req.body.ans
    ) {
      throw new Error("Please enter valid fields");
    }
    const data = await puzzle.create(req.body);
    res.status(201).json({
      status: "success",
      message: "user created",
      data: data
    })
  }
  catch (error) {
    res.status(404).json({
      message: error.message
    })
  }
}

exports.GetPuzzle = async function (req, res, next) {
  try {
    const data = await puzzle.find()
    res.status(200).json({
      status: "success",
      message: "users get",
      data: data
    })
  }
  catch (error) {
    res.status(404).json({
      message: error.message
    })
  }
}