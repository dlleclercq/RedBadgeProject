const { DataTypes } = require("sequelize");
const db = require("../db");

const OwnedSkins = db.define("ownedSkin", {
  ownedSkin: {
    type: DataTypes.STRING,
    allowNull: false
  },
  skinChroma: {
    type: DataTypes.STRING,
    allowNull: false
  },
  owner_id: {
    type: DataTypes.INTEGER
  }
});

module.exports = OwnedSkins;
