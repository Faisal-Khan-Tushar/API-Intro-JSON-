//this is a javascript object
const footballer = { name: 'Sergio Aguero', nationality: 'Argentine', club: 'Barcenlona', salary: 30000 };
//stringify
const footballerStringified = JSON.stringify(footballer);
// console.log(footballer)
// console.log(footballerStringified);
//parse
const clubBayernMunich = {
  clubname: 'Bayern Munich',
  totalPlayersInSquad: 27,
  captain: 'Manuel Nuer',
  defenders: {
    centerback1: 'joshua kimmich',
    centerback2: 'N. sule',
    rightback: 'Stanisic',
    leftback: 'Aloponso Davies',

  },
  substitute: ['leroy sane', 'corentin tolissio']
}
// console.log(clubBayernMunich);
//stringifying it at first
const bayernStringified = JSON.stringify(clubBayernMunich);
console.log(bayernStringified);
//parse
const converted = JSON.parse(bayernStringified);
console.log(converted);