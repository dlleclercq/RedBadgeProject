const { Sequelize } = require("sequelize");

const db = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
        require: true,
        rejectUnauthorized: false, // very important
      }
  }
//   host: "localhost"
});

db
    .authenticate()
    .then(() => {
        console.log("Connection has been established successfully.");
    })
    .catch((err) => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = db;
