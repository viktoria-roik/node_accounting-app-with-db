'use strict';

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres', 'postgres', '12345678', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = { sequelize };