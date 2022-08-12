const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const empregado = employees.find((employee) => employee.id.includes(id));
  const animal = species
    .find((specie) => specie.id.includes(empregado.responsibleFor[0]))
    .residents.sort((a, b) => b.age - a.age)[0];
  return [animal.name, animal.sex, animal.age];
}

module.exports = getOldestFromFirstSpecies;
