const cricketer = { name: 'Babar Azam', club: 'peshawar', born: 'pakistan' };
// console.log(cricketer);
const stringify = JSON.stringify(cricketer);
// console.log(stringify);
const rajshtanRoyals = {
  clubTag: 'RR',
  coach: 'Kumar Sangakkara',
  players: ['mustafiz', 'jos buttler', 'jofra archer'],
  benchedPlayers: {
    player1: 'liam livingstone',
    born: 'England',
    player2: 'Ravi pratap sing',
    born2: 'India'
  }
}
// console.log(rajshtanRoyals);
const converted = JSON.stringify(rajshtanRoyals);
// console.log(converted);
//parse
const parse = JSON.parse(converted);
// console.log(parse);

//json placeholder
function loadDataAgain() {
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(data => console.log(data));
}
