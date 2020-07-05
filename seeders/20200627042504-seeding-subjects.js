'use strict';
const subjects = require('../files/subjects.json');

subjects.forEach((subject) => {
  subject.createdAt = new Date()
  subject.updatedAt = new Date()
})

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("subjects", subjects, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("subjects", null, {});
  }
};