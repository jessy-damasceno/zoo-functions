const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const entradas = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];

function countEntrants(entrants) {
  const qtd = entrants.reduce((accAge, entrant) => {
    if (entrant.age < 18) {
      return { child: accAge.child + 1, adult: accAge.adult, senior: accAge.senior };
    }
    if (entrant.age >= 18 && entrant.age < 50) {
      return { child: accAge.child, adult: accAge.adult + 1, senior: accAge.senior };
    }
    return { child: accAge.child, adult: accAge.adult, senior: accAge.senior + 1 };
  }, { child: 0, adult: 0, senior: 0 });
  return qtd;
}

console.log(countEntrants(entradas));

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const { adult, senior, child } = prices;
  const qtd = countEntrants(entrants);
  const total = (qtd.child * child) + (qtd.adult * adult) + (qtd.senior * senior);
  return total;
}

module.exports = { calculateEntry, countEntrants };
