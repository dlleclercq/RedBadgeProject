const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { Router } = require("express");
const { OwnedSkins } = require("../models");
const validateSession = require("../middleware/validate-session");

const router = Router();


router.post("/newskin", validateSession, function (req, res) {
  const skinAdd = {
    ownedSkin: req.body.skinList.ownedSkin,
    skinChroma: req.body.skinList.skinColor,
    owner_id: req.user.id
  }
  OwnedSkins.create(skinAdd)
  .then(ownedSkin => res.status(200).json(ownedSkin))
  .catch(err => res.status(500).json({error: err}))
});

// router.put("/upgrade/:id", function (req, res) {
//   const upgradeSkin = {
//     skinName: req.body.skinList.skinName,
//     weaponType: req.body.skinList.weaponType
//   }

//   const query = { where: {id: req.params.id, owner_id: req.user.id}}

//   OwnedSkins.update(upgradeSkin, query)
//   .then((skins) => res.status(200).json(skins))
//   .catch(err => res.status(500).json({error: err}))
// }); // STRETCH GOAL: IF I CAN'T GET THE UPGRADE FEATURE TO WORK, NO BIG DEAL DON'T STRESS ABOUT IT DAVID!

router.delete("/sell/:id", validateSession, function (req, res) {
  const query = { where: {id: req.params.id, owner_id: req.user.id}}

  OwnedSkins.destroy(query)
  .then(() => res.status(200).json({message: "Skin Sold"}))
  .catch(err => res.status(500).json({error: err}))
});

  router.get("/ownedskins", validateSession, function (req, res) {

    OwnedSkins.findAll({
      where: {owner_id: req.user.id}
    })
    .then(skins => res.status(200).json(skins))
    .catch(err => res.status(500).json({error: err}))
  });

module.exports = router;
