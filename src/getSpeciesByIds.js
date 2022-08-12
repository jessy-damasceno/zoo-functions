const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getSpeciesByIds = (...buscas) => {
  const array = [];

  buscas.forEach((busca) => {
    const foundSpecie = species.find((specie) => specie.id.includes(busca));
    array.push(foundSpecie);
  });

  return array;
};

module.exports = getSpeciesByIds;
