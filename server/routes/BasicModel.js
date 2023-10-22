const basicModel = require("../models/basicModel");
const router = require("express").Router();

router.get("/", async (req, res) => {
  const query = req.query.new;
  const users = async(query) =>{
    query ? await basicModel.find().sort({_id:-1 }).limit(5)
      : await basicModel.find();
  }
  users.then(res.status(200).json(users))
  .catch((err)=>{
    res.status(500).json(err);
  });

});