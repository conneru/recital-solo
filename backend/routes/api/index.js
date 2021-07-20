const router = require("express").Router();
const sessionRouter = require("./session.js");
const usersRouter = require("./users.js");
const moviesRouter = require("./movies.js");

router.use("/session", sessionRouter);

router.use("/users", usersRouter);

router.use("/movies", moviesRouter);

// router.post("/test", function (req, res) {
//   res.json({ requestBody: req.body });
// });

module.exports = router;
