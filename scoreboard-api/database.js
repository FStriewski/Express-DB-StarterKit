// Stuff moved to index.js

const Sequelize = require('sequelize');

//('postgres://user:pass@example.com:5432/dbname');
// Or you can simply use a connection uri
const sequelize = new Sequelize(
  "postgres",   // database
  "postgres",   //username
  "secret",     // password
  {
    host: "localhost",
    port: 5432,
    dialect: "postgres",

      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
//
//   const User = sequelize.define('user', {
//   firstName: {
//     type: Sequelize.STRING
//   },
//   lastName: {
//     type: Sequelize.STRING
//   }
// });
//
// // force: true will drop the table if it already exists
// User.sync({force: true}).then(() => {
//   // Table created
//   return User.create({
//     firstName: 'John',
//     lastName: 'Hancock'
//   });
// });

module.exports sequelize
