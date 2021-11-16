const { DataTypes } = require("sequelize");
const db = require("../db");

const UpgradeMats = db.define("upgradeMats", {
  numOfUpgradeMats: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  owner_id: {
    type: DataTypes.INTEGER
  }
});

module.exports = UpgradeMats;
