const Sequelize = require('sequelize');
// const Pool = require('pg');

const connection = new Sequelize('blogpress', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres',
  port: '5433'
});

module.exports = connection;
