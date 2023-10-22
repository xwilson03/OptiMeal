const recipe = require("../models/recipe");
const router = require("express").Router();
//Change to recipes
router.get("/", async (req, res) => {
  const query = req.query.new;
  try {
    const recipes = query
      ? await basicModel.find().sort({ _id: -1 }).limit(5)
      : await basicModel.find();
    res.status(200).json(recipes);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;