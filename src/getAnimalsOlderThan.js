const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const findSpecie = species.find((specie) => specie.name.includes(animal));
  return findSpecie.residents.every((resident) => resident.age > age);
};

module.exports = getAnimalsOlderThan;
