const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getSpecieNameByLocation = (local) => species.filter((specie) => specie
  .location === local).map((specie) => specie.name);

const getAnimalNameByLocation = (options, local) => {
  const objRetornado = [];
  const filterSpecie = species.filter((specie) => specie
    .location === local);
  if (options.sex) {
    filterSpecie.forEach((element) => objRetornado
      .push({ [element.name]: element.residents.filter((atual) => atual.sex === options.sex)
        .map((resident) => resident.name) }));
  } else {
    filterSpecie.forEach((element) => objRetornado
      .push({ [element.name]: element.residents.map((resident) => resident.name) }));
  }
  if (options.sorted === true) {
    objRetornado.map((element) => element[Object.keys(element)[0]].sort());
  }
  return objRetornado;
};

function getAnimalMap(options) {
  if (!options || !options.includeNames) {
    return {
      NE: getSpecieNameByLocation('NE'),
      NW: getSpecieNameByLocation('NW'),
      SE: getSpecieNameByLocation('SE'),
      SW: getSpecieNameByLocation('SW'),
    };
  }
  return {
    NE: getAnimalNameByLocation(options, 'NE'),
    NW: getAnimalNameByLocation(options, 'NW'),
    SE: getAnimalNameByLocation(options, 'SE'),
    SW: getAnimalNameByLocation(options, 'SW'),
  };
}

module.exports = getAnimalMap;
