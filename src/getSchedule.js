const { hours, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const days = Object.keys(hours);
const openClose = Object.values(hours);

// console.log(days);
// console.log(openClose);

const verificaAnimal = (nome) => species.some((specie) => specie.name === nome);

const createSchedule = (nome) => {
  if (verificaAnimal(nome) === true) {
    return species.find((specie) => specie.name === nome).availability;
  }
  const schedule = days.reduce((acc, day, i) => {
    const { open, close } = openClose[i];
    return { ...acc,
      [day]: {
        officeHour: `Open from ${open}am until ${close}pm`,
        exhibition: species.filter((specie) => specie.availability
          .includes(day)).map((item) => item.name),
      },
    };
  }, {});
  schedule.Monday.officeHour = 'CLOSED';
  schedule.Monday.exhibition = 'The zoo will be closed!';
  return schedule;
};

function getSchedule(string) {
  const objeto = createSchedule(string);
  if (days.includes(string)) {
    return { [string]: objeto[string] };
  }
  if (!string || verificaAnimal(string) === false
  || !days.includes(string)) {
    return objeto;
  }
}

console.log(getSchedule('Monday'));

module.exports = getSchedule;
