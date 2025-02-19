'use strict';
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(
  'sqlite:' + (process.env.SQLITE || './db.sqlite3')
);

const Book = sequelize.define('books', {
  title: {
    type: DataTypes.STRING(256),
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING(256),
    allowNull: false,
  },
  isbn: {
    type: DataTypes.STRING(256),
    allowNull: false,
  },
  genre: {
    type: DataTypes.STRING(256),
    allowNull: false,
  },
  publicationYear: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING(256),
    allowNull: false,
  },
});

//sequelize.sync(); // CREATE TABLE // First Command.

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

module.exports = Book;
