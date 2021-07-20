const express = require("express");
const asyncHandler = require("express-async-handler");
const { Movie, Quote } = require("../../db/models/");

const router = express.Router();

router.get(
  "",
  asyncHandler(async (req, res) => {
    const movies = await Movie.findAll();
    console.log(movies);
    return res.json(movies);
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const movie = await Movie.findByPk(req.params.id, { include: [Quote] });

    return res.json([movie]);
  })
);

module.exports = router;
