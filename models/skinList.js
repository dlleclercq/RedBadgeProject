const { DataTypes } = require("sequelize");
const db = require("../db");

const Skin = db.define("skin", {
  skinName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  weaponType: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Skin;
