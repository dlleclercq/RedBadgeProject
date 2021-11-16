const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { Router } = require("express");
const { Skin } = require("../models");
const validateSession = require("../middleware/validate-session");

const router = Router();


router.post("/addskin", function (req, res) {
  const skinAdd = {
    skinName: req.body.skinList.skinName,
    weaponType: req.body.skinList.weaponType,
  }
  Skin.create(skinAdd)
  .then(skins => res.status(200).json(skins))
  .catch(err => res.status(500).json({error: err}))
  }
 
);

router.get("/allskins", function (req, res) {
  // let userid = req.user.id;
  Skin.findAll() 
  .then(skins => res.status(200).json(skins))
  .catch(err => res.status(500).json({error: err}))
  }
);

router.delete("/removeskin/:id", function (req, res) {
  const query = { where: {id: req.params.id}};

  Skin.destroy(query)
  .then(() => res.status(200).json({message: "Skin Removed"}))
  .catch(err => res.status(500).json({error: err}))
    }
  );

  router.put("/editskin/:id", function (req, res) {
    const skinUpdate = {
      skinName: req.body.skinList.skinName,
      weaponType: req.body.skinList.weaponType
    };

    const query = {where: {id: req.params.id}}

    Skin.update(skinUpdate, query)
    .then((skins) => res.status(200).json(skins))
    .catch(err => res.status(500).json({error: err}))
    }
  );

module.exports = router;
