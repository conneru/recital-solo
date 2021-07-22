const express = require("express");
const asyncHandler = require("express-async-handler");
const { Movie, Quote } = require("../../db/models/");

const router = express.Router();

router.post(
  "",
  asyncHandler(async (req, res) => {
    const movie = await Movie.create(req.body);
    res.redirect(`${req.baseUrl}`);
    return res.json(movie);
  })
);

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const movies = await Movie.findAll();

    return res.json(movies);
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const movie = await Movie.findByPk(req.params.id, { include: [Quote] });

    return res.json(movie);
  })
);

router.delete(
  "/:id",
  asyncHandler(async (req, res) => {
    await Movie.destroy({ where: { id: req.params.id } });
  })
);

router.put(
  "/:id",
  asyncHandler(async function (req, res) {
    const movie = await Movie.update(
      { ...req.body },
      { where: { id: req.params.id } }
    );
    return res.json(movie);
  })
);

module.exports = router;
