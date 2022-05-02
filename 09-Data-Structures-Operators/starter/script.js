'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Indian', 'Vegetarian', 'Organic'],
  starterMenu: ['Bread','Idly','Mendu wada','Upma' ],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  
  // order: function(starterIndex, mainIndex){
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  // },
  
  // orderBy: function({ starterIndex = 1, mainIndex=0, time, address}){
  //   console.log(`
  //   Order received! ${this.starterMenu[starterIndex]} and 
  //   ${this.mainMenu[mainIndex]} will be delivered to
  //   ${address} at ${time}`);
  // },
  // orderPasta: function(ing1,ing2,ing3){
  //   console.log(`Here is your delicious pasta with ${ing1},
  //   ${ing2} and ${ing3}`);
  // },

  // orderingPizaa: function(mainIngredients, ...otheringredients){
  //   console.log(mainIngredients);
  //   console.log(otheringredients);
  // }

};

//speard operator
// const arr1 = [5,6,7];
// const badNewArr = [1,2, arr1[0],arr1[1],arr1[2]];
// console.log(badNewArr);

// const newArr = [1,2, ...arr1];
// console.log(newArr);

// console.log(restaurant.mainMenu);
// const newMenu = [...restaurant.mainMenu, 'Puran Poli'];
// console.log(newMenu);

// // copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// //join 2 arrays
// const cobmineMenu = [...restaurant.starterMenu,...mainMenuCopy];
// console.log(cobmineMenu);

// //Iterables : are arrays, strings, maps, sets. NOT objects.
// const str = 'jonas';
// const letter = [...str, ' ', 's.'];
// console.log(letter);
// console.log(...str);

// //Real words example
// // const ingredients = [
// //   prompt("let's make pasta! Ingredient 1?"),
// //   prompt("Ingredient 2?"),
// //   prompt("Ingredient 3?")
// // ]

// // console.log(ingredients);

// //ES2018 objects are also iterables
// const newRestaurant = { foundedIn: 1990, ...restaurant,
// founder: 'Foodi Baba'};
// console.log(newRestaurant);

// // restaurant.orderPasta(ingredients[0],ingredients[1],
// //   ingredients[2]);
//   // restaurant.orderPasta(...ingredients);
// const restaurantCopy = {...restaurant};
// restaurantCopy.name = "Andrew";
// console.log(restaurantCopy.name);
// console.log(restaurant.name); // it means that we can change and copy object property
 
// // 1) Destructing Rest Pattern - [a, b, ...othersName]
// const arr2 = [1,2, ...[3,4]];
// //Rest, becoz on Left size of = 
// const [l, m, ...othersName] = [1, 2, 3, 4, 5]
// console.log(l,m,othersName);

// const [bread, Idly , ...otherMenu] = [...restaurant.starterMenu,
// ...restaurant.mainMenu];

// console.log(bread,Idly,otherMenu);

// //objects
// const {thu, ...weekdays} = restaurant.openingHours;
// console.log(weekdays);

// //2) functions : Rest parameter
// const add = function(...numbers){
//   let sum = 0;
//   for(let i=0; i<numbers.length; i++){
//     sum = sum + numbers[i];
//   }
//   console.log(sum);
// }
// add(2,5);
// add(2,5,7,9);
// add(1,2,3,4,5,6,7,8);

// //using spread with rest
// const s = [2,4,6,8];
// add(...s);

// restaurant.orderingPizaa('Onion', 'Pyaz','Olives','Spinach');
// console.log('Onion');

// //////////////////////////////////////////////////
// //Destructuring with array and object
// //object destructuring

// restaurant.orderBy({
//   time:'22:30',
//   mainIndex:2,
//   starterIndex:2
// });

// restaurant.orderBy({
//   address:'21 street, Mumbai',
//   time:'7:40'
// })


// const { name, openingHours , categories } = restaurant;
// console.log( name, openingHours, categories);

// const { name: restaurantName,
// openingHours: hours,
// categories: tags} = restaurant;
// console.log(restaurantName,hours,tags);

// //Default value
// const { menu = [], starterMenu: starterMenu = [] }= restaurant;
// console.log(menu,starterMenu);

// //Mutating variables
// let ab = 111;
// let bc = 222;
// const obj = {ab:23, bc:7, c:14};
// ({ab,bc} = obj);
// console.log(ab,bc)

// //Nested objects
// const {
//   fri: {open: o, close: clo}, 
// } = openingHours;
// console.log(o,clo);

// // Destructing Arrays
// const arr = [2,3,4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x,y,z]= arr;
// console.log(x,y,z);

// let [main,secondary] = restaurant.categories;
// console.log(main,secondary);

// //switch data first to second and second to first
// // we need middle variable to switch the value
// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main,secondary);

// // here the second option to reassign the value. no need to declare variable
// //another way to destruct the array or switch 
// [main,secondary] = [secondary, main];
// console.log(main,secondary);

// //received 2 return values from a function - order function call
// const [starter, mainCourse] =restaurant.order(0,1);
// console.log('Starter Dish : ' + starter + ' | ' + 'Main Dish : '+ mainCourse);

// // nested destructuring
// const nested = [2,3, [5,6]];
// // const [i, ,j] = nested;
// // console.log(i,j);

// const [i, , [j,k]] = nested;
// console.log(i,j,k);

// //another way to destructuring dafault value
// const [p=1,q=1,r=1] = [8,9];
// console.log(p,q,r);


// coding challange


const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};


// 1. Create one player array for each team (variables 'players1' and 'players2')
// 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
// 3. Create an array 'allPlayers' containing all players of both teams (22 players)
// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
// 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
// 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
// 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

// TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

//1
const [player1,player2] = game.players;
console.log(player1,player2);
//2
const [gk, ...fieldPlayers] = player1;
console.log(gk, fieldPlayers);
//3
const  allPlayers  = [...player1,...player2];
console.log(allPlayers);
//4
const [...players1Final] = [...player1,'Thiago', 'Coutinho', 'Perisic' ];
console.log(players1Final);
//5
// const {odds:{team1,x:draw,team2}} = game.odds;
// console.log(team1,draw,team2);
//6
const printGoals = function(...players){
  // console.log(players);
  console.log(`${players.length}  goals were scored`);
}
printGoals(  'Davies', 'Kimmich', 'Goretzka');
printGoals(...game.scored);

//object keys values entries

const properties = Object.keys(restaurant.openingHours);
console.log(properties);

let openStr = `we are open on ${properties.length} days : `;
for(const day of properties){
  openStr += `${day}, `;
}

console.log(openStr);

const value = Object.values(restaurant.openingHours);
console.log(value);

const entries = Object.entries(restaurant.openingHours);
console.log(entries);

// [key, value]
for(let [key, {open, close}] of entries){
  console.log(`On ${key} we open at ${open} and close ${close}`);
}


// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/
// for( const [i,playerScore] of Object.entries(game.scored)){
  for( const [i,player] of game.scored.entries()){
  console.log(` Goal ${i + 1}: ${player} `);
}

// const oddAvg = Object.values(game.odds); console.log(`${oddAvg}`);
let average = 0;
const oddLenght = Object.values(game.odds);
for( const odd of oddLenght){
  // const oddLenght =  Object.values(game.odds);
  // console.log(Object.values(game.odds).length);
  average += odd;
  average /= oddLenght.length; 
}
console.log(average);
//3
const oddScore = Object.entries(game.odds);
for( const [team,odd] of oddScore){
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]} `;
  console.log(`Odd of ${teamStr} ${odd}`)
} 

//////////////////
//sets

///////////////////////////////////////
// Sets
const ordersSet = new Set(['Pasta',
'Pizza',
'Pizza',
'Risotto',
'Pasta',
'Pizza',]);
 
ordersSet.add('burger');
ordersSet.delete('Pizza');
console.log(ordersSet.has('burger'));
console.log(ordersSet.size);
console.log(ordersSet);

for(const orders of ordersSet){
  console.log(orders);
}

//map
const rest = new Map();
rest.set('name', 'Restaurant');
rest.set(1,'Salad');
console.log(rest.set(2,'Fruits'));
console.log(rest.get('name'));
rest
  .set('categories', ['chinese','fruits','maharashtrain','south food','north food'])
  .set('open',11)
  .set('close',23)
  .set(true, 'we are open :D')
  .set(false,'we are close :(');
 console.log(rest.get(true));
 const time = 15;
 console.log(rest.get(time > rest.get(open)) && rest.get(time < rest.get(close)));
 console.log(rest.has('categories'));
 rest.delete(2);
 
 const arr = [1,2];
 rest.set(arr,'Test');
 console.log(rest);
 console.log(rest.size);

 console.log(rest.get(arr));

 //Add element without set method
 const question = new Map([
  ['question', 'Which is the best programming language ?'],
  [1, 'C'],
  [2, 'Java'],
  [3,'Javascript'],
  [4, 'Python'],
  ['correct', 3],
  [true, 'Your answer is correct'],
  [false, 'try again']
 ]);
 console.log(question);

 console.log(question.get('question'));
 for(const [key,value] of question.entries()){
  if(typeof key === 'number'){  
   console.log(`Answer is ${key}: ${value}` );
  }
 }

 const answer = prompt('Your anser is');
 console.log(answer);
 console.log(question.get(question.get('correct') == answer));

 //convert map into the array
 console.log([...question]);
//  console.log([...question.entries()]);
 console.log([...question.keys()]);
 console.log([...question.values()]);

 ///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

//1 
  const events = [...new Set(gameEvents.values())];
console.log( events);
// console.log(events);

 //2 
 gameEvents.delete(64);
 console.log(gameEvents.entries());
 
 //3
// console.log(`An event happened, on average, every ${90 / gameEvents.size} minutes`);
 const time1 = [...gameEvents.keys()].pop();
 console.log(time1);
console.log(`An event happened, on average, every ${time1 / gameEvents.size} minutes`);

//4

for( const [min, event] of gameEvents){
  const half = min <= 45 ? 'First Half' : 'Second Half';
  console.log(`${half} ${min} : ${event}`);
}