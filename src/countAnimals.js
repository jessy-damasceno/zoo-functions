const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animals) {
  if (!animals) {
    const animalObj = species.reduce((acc, cur) => {
      const { name, residents } = cur;
      return { ...acc, [name]: residents.length };
    }, {});
    return animalObj;
  }
  const { specie, sex } = animals;
  const findSpecie = species.find((item) => item.name === specie);
  if (!sex) return findSpecie.residents.length;
  return findSpecie.residents.filter((resident) => resident.sex === sex).length;
}

module.exports = countAnimals;
