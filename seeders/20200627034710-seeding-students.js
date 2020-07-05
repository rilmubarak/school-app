'use strict';
const students = require('../files/students.json');

students.forEach((student) => {
  student.createdAt = new Date()
  student.updatedAt = new Date()
})

console.log(students);

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("students", students, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("students", null, {});
  }
};
