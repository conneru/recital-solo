const express = require("express");
const asyncHandler = require("express-async-handler");
const { Movie, Quote } = require("../../db/models/");

const router = express.Router();

router.delete(
  "/:id",
  asyncHandler(async (req, res) => {
    
    await Quote.destroy({where:{id:req.params.id}});
  })
);

module.exports = router;