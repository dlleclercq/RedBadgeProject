const { DataTypes } = require("sequelize");
const db = require("../db");

const Drop = db.define("dropInvent", {
  numOfDrops: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  owner_id: {
    type: DataTypes.INTEGER
  }
});

module.exports = Drop;
