'use strict';
const teachers = require('../files/teachers.json');

teachers.forEach((teacher) => {
  teacher.createdAt = new Date()
  teacher.updatedAt = new Date()
})

console.log(teachers);

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("teachers", teachers, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("teachers", null, {});
  }
};
