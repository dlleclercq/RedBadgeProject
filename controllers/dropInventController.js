const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { Router } = require("express");
const { Drop } = require("../models");
const validateSession = require("../middleware/validate-session");

const router = Router();


router.post("/newdrop", validateSession, function (req, res) {
  const dropAdd = {
    numOfDrops: req.body.dropInvent.numOfDrops,
    owner_id: req.user.id
  }

  Drop.create(dropAdd)
  .then(drops => res.status(200).json(drops))
  .catch(err => res.status(500).json({error: err}))
});

router.put("/dropused", validateSession, function (req, res) {
  const usedDrop = {
    numOfDrops: req.body.dropInvent.numOfDrops,
    owner_id: req.user.id
  }

  const query = {where: {owner_id: req.user.id}}

  Drop.update(usedDrop, query)
  .then((drops) => res.status(200).json(drops))
  .catch(err => res.status(500).json({error: err}))
});

router.get("/viewdrops", validateSession, function (req, res) {

    Drop.findAll({
      where: {owner_id: req.user.id}
    })
    .then(drops => res.status(200).json(drops))
    .catch(err => res.status(500).json({error: err}))
});

module.exports = router;
