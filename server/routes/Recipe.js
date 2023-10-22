const Recipe = require("../models/Recipe");
const router = require("express").Router();

router.get("/", async (req, res) => {
  const query = req.query.new;
  try {
    const recipes = query
      ? await Recipe.find().sort({ _id: -1 }).limit(5)
      : await Recipe.find();
    res.status(200).json(recipes);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;