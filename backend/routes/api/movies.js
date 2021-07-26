const express = require("express");
const asyncHandler = require("express-async-handler");
const { Movie, Quote } = require("../../db/models/");
const { Op } = require("sequelize");

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
    const movies = await Movie.findAll({ order: ["title"] });

    return res.json(movies);
  })
);

router.get(
  "/search/:content",
  asyncHandler(async (req, res) => {
    const movies = await Movie.findAll({
      where: {
        title: {
          [Op.iLike]: "%" + req.params.content + "%",
        },
      },
    });

    return res.json(movies);
  })
);

router.get(
  "/genre/:genre",
  asyncHandler(async (req, res) => {
    const genre = req.params.genre;
    const movies = await Movie.findAll({ where: { genre }, order: ["title"] });

    return res.json(movies);
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const movie = await Movie.findByPk(req.params.id);

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
