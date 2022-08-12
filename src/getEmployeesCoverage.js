const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const findSpecie = (specieId) => species.find((specie) => specie.id === specieId);

const returnEmployee = (obj) => {
  const { id, firstName, lastName, responsibleFor: animals } = employees
    .find((employee) => employee.firstName === obj
      .name || employee.lastName === obj.name || employee.id === obj.id);
  return {
    id,
    fullName: `${firstName} ${lastName}`,
    species: animals.map((animal) => findSpecie(animal).name),
    locations: animals.map((animal) => findSpecie(animal).location),
  };
};

const verificaName = (obj) => data.employees.some(
  (pessoa) =>
    pessoa.id === obj.id
    || pessoa.firstName === obj.name
    || pessoa.lastName === obj.name,
);

const getEmployeesCoverage = (obj) => {
  if (!obj) {
    const array = [];
    employees.forEach((employee) => array.push(returnEmployee(employee)));
    return array;
  }
  if (verificaName(obj) === false) {
    throw new Error('Informações inválidas');
  }
  return returnEmployee(obj);
};

module.exports = getEmployeesCoverage;
