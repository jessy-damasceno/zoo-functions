const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  const findEmployee = employees.find((employee) => employee.id === id);
  return findEmployee.managers.length <= 1;
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === true) {
    const filterEmployees = employees.filter((employee) => employee.managers.includes(managerId));
    return filterEmployees.map((nome) => `${nome.firstName} ${nome.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
