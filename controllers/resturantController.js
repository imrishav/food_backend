const Resturant = require("../models/resturantModel");

exports.createResturant = async (req, res, next) => {
  const resturant = await Resturant.create(req.body);

  res.status(201).json({
    status: "success",
    data: {
      resturant
    }
  });
};

exports.getAllRestro = async (req, res, next) => {
  const allRestro = await Resturant.find();

  res.status(200).json({
    status: "success",
    data: {
      allRestro
    }
  });
};

exports.getRestroById = async (req, res, next) => {
  const singleRestro = await Resturant.findById(req.params.id);
  res.status(200).json({
    status: "success",
    data: {
      singleRestro
    }
  });
};

exports.updateResturant = async (req, res, next) => {
  console.log(req.params.id);

  const rest = await Resturant.findByIdAndUpdate(req.params.id, req.body);

  res.status(200).json({
    status: "success",
    data: {
      rest
    }
  });
};

exports.deleteRestro = async (req, res, next) => {
  await Resturant.findByIdAndDelete(req.params.id);

  res.status(204).json({
    status: "success",
    data: null
  });
};
