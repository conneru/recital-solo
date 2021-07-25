const express = require("express");
const asyncHandler = require("express-async-handler");
const { Movie, Quote } = require("../../db/models/");

const router = express.Router();

router.delete(
  "/:id",
  asyncHandler(async (req, res) => {
    await Quote.destroy({ where: { id: req.params.id } });

    return res.json(req.params.id);
  })
);
router.post(
  "",
  asyncHandler(async (req, res) => {
    const quote = await Quote.create(req.body);
    return res.json(quote);
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    let quotes = await Quote.findAll({ where: { movieId: req.params.id } });

    return res.json(quotes);
  })
);

router.put(
  "/:id",
  asyncHandler(async function (req, res) {
    const quote = await Quote.update(
      { ...req.body },
      { where: { id: req.params.id } }
    );
    return req.params.id;
  })
);

module.exports = router;
