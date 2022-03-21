//const { users } = require('./users');




// const trips = [{ distance: 34 }, { distance: 12 }, { distance: 1 }];

// const sample = ['this', 'is', 'sample'];

// const result = sample.splice(2, 1);

// const areAllLessThan50 = trips.every((trip, i, arr) => trip.distance < 50);
// const areSomeLessThan50 = trips.some((trip, i, arr) => trip.distance < 50);
// console.log(areSomeLessThan50);






// const sum = trips.reduce((acc, elem, i, arr) => {
//   return acc + elem.distance;
// }, 0);

// let sum2 = 0;
// trips.forEach((trip) => {
//   sum2 += trip.distance;
// });

// console.log(sum, sum2);

// const doubledTrips = trips.map((trip, i, arr) => {
//   return trip.distance;
// });

// const distances = [];
// trips.forEach((trip) => distances.push(trip.distance));

// const bigTrips = trips.filter((trip, i, arr) => trip.distance > 2);

// const bigTrips2 = [];
// trips.forEach((trip) => {
//   if (trip.distance > 2) {
//     bigTrips2.push(trip);
//   }
// });

// console.log(bigTrips2);
// trips.forEach((elem, i, arr) => {
//   console.log(elem);
// });

// function reverse(str) {
//   let result = '';
//   str.split('').forEach((char, i, arr) => {
//     result = char + result;
//     //result += arr[arr.length - 1 - i];
//   });
//   console.log(result);
// }

// function reverse2(str) {
//   return str.split('').reduce((acc, char) => {
//     return char + acc;
//   }, '');
// }

// const result2 = reverse2('hello');
// console.log(result2);

// reverse('hello');
// const isEven = (num) => num % 2 === 0;

// function dash(str) {
//   let result = '';
//   str.split('').forEach((item, i, arr) => {
//     if (isEven(item) && isEven(arr[i + 1])) {
//       result += `${item}-`;
//     } else {
//       result += arr[i];
//     }
//   });
//   console.log(result);
// }

// function dash2(str) {
//   let result = str.split('').reduce((acc, item, i, arr) => {
//     if (isEven(item) && isEven(arr[i + 1])) {
//       return (acc += `${item}-`);
//     } else {
//       return (acc += arr[i]);
//     }
//   }, '');
//   console.log(result);
// }

// dash2('22344');

// const countVowels  = (str) => {
//   const map = {
//     a: 0,
//     e: 0,
//     y: 0,
//     u: 0,
//     i: 0,
//     o: 0
//   }

//   str.split('').forEach(letter => {
//     if (letter in map) {
//       map[letter]++
//     }
//   })
//   return map
// }

// for (let i = 0; i < trips.length; i++) {
//   trips[i]

// }

// for (let key in obj) {

// }

// for (let item of arr) {

// }

// console.log(result);
// console.log(sample);
// function createArr(n) {
//   const arr = [];
//   for (let i = 0; i < n; i++) {
//     arr.unshift(i);
//   }
// }

// function trackTime(func) {
//   const start = Date.now();
//   func();
//   const result = Date.now() - start;
//   console.log(result / 1000);
// }

// trackTime(() => createArr(1000000));



                                    // HOME WORK



//-----------------------------------------------

// //forEach(arr, callback) ==> undefined

// let arr = ['this', 'is', 'my', 'name'];

// Array.prototype.forEach2 = function (cb) {
//     for (let i = 0; i < this.length; i++) {
//         cb(this[i], i, this);
//     }
// }

// arr.forEach2((elem, i, arr) => {
//     console.log(`element: '${elem}' index: ${i} array: [${arr}]`);
// })


//-----------------------------------------------

// //map(arr, callback) ==> [elem1,...elemN]

// let arr = ['this', 'is', 'my', 'name'];

// Array.prototype.map2 = function (cb) {
//     let newArr = [];
//     for (let i = 0; i < this.length; i++) {
//         newArr.push(cb(this[i], i, this));
//     }
//     return newArr;
// }
// let newArr = arr.map2((elem, i, arr) => {
//     return elem += 'bla';
// });

// console.log(newArr);

//-----------------------------------------------

// filter(arr, callback) ==> []


// let arr2 = [1, 2, 3, 4, 5];
// Array.prototype.filter2 = function (cb) {
//     let newArr = [];
//     for (let i = 0; i < this.length; i++) {
//         if(cb(this[i], i, this)){
//             newArr.push(this[i]);
//         }
//     }
//     return newArr;
// }

// let newArr = arr2.filter2((elem, i, arr) => {
//     return elem > 3;
// });
//console.log(newArr);

//-----------------------------------------------

// reduce(arr, callback, acc) ==> acc

// let arr2 = [1, 2, 3, 4, 35];
// Array.prototype.reduce2 = function (cb, initial) {
//     let accum = initial;
//     for (let i = 0; i < this.length; i++) {
//         accum = cb(accum, this[i], i, this);
//     }
//     return accum;
// }
// let result = arr2.reduce2((accum, elem, i, arr) => {
//    return accum += elem;
// }, 0);

//console.log(result);

//-----------------------------------------------

// // find(arr, callback) ==> elem


// let arr2 = [1, 2, 3, 4, 5];
// Array.prototype.find2 = function (cb) {
//     let newArr = [];
//     for (let i = 0; i < this.length; i++) {1
//         if(cb(this[i], i, this)){
//             newArr.push(this[i]);
//             return newArr;
//         }
//     }
// }
// let newArr = arr2.find2((elem, i, arr) => {
//     return elem > 3
// });
// console.log(newArr);

//-----------------------------------------------




// const arr = [1, 23, 4, 5, 6, 7, 8];

// function forEach(arr, callback) {
//   for (let i = 0; i < arr.length; i++) {
//     callback(arr[i], i, arr);
//   }
// }

// let maxValue = arr[0];
// arr.forEach((elem) => {
//   maxValue = maxValue > elem ? maxValue : elem;
// });

// const result = arr.reduce((acc, num) => {
//   console.log(acc);
//   return acc > num ? acc : num;
// }, arr[0]);

//const fullName = 'Jean Claude Van Damme'; //JCVD

// let initials = fullName
//   .split(' ')
//   .map((name) => name[0])
//   .join('');

// const initials = fullName
//   .split(' ')
//   .reduce((acc, name) => (acc += name[0]), '');

//const fruits = ['apple', 'apricot', 'coconut', 'apple'];

// const countedFruits = {};
// fruits.forEach((fruit) => {
//   const isFruitPresent = fruit in countedFruits;
//   const quantity = isFruitPresent ? countedFruits[fruit] + 1 : 1;
//   countedFruits[fruit] = quantity;
// });

// const countedFruits = fruits.reduce((acc, fruit) => {
//   //const isFruitPresent = fruit in acc;
//   const quantity = acc[fruit] ? acc[fruit] + 1 : 1;
//   //const result = Object.assign(acc, { [fruit]: quantity });
//   return { ...acc, [fruit]: quantity };
// }, {});

//console.log(countedFruits);
//{apple: 5, ...}
// const bob = { name: 'Bob', age: 30, voted: true };

// const keys = Object.keys(bob);
// const values = Object.values(bob);
// const entries = Object.entries(bob);

// const result = { ...bob };
// bob.name = 'sdfe';
// const admin = { isAdmin: true };
// const notAdmin = { isAdmin: false };

// const result = Object.assign(bob, notAdmin, admin);

// const agesArray = [
//   {
//     name: 'John',
//     age: 13,
//   },
//   {
//     name: 'Mark',
//     age: 56,
//   },
//   {
//     name: 'Rachel',
//     age: 45,
//   },
//   {
//     name: 'Nate',
//     age: 67,
//   },
//   {
//     name: 'Jeniffer',
//     age: 65,
//   },
// ];

// const agesObj = agesArray.reduce((acc, user) => {
//   // const name = user.name;
//   // const age = user.age;
//   // const result = Object.assign(acc, { [name]: age });
//   // return result;
//   return { ...acc, [user.name]: user.age };
// }, {});

// const a = Object.entries(agesObj).map(([name, age]) /* (entry) */ => {
//   // const name = entry[0];
//   // const age = entry[1];
//   return { [name]: age };
// });

// const b = Object.keys(agesObj).map((key) => {
//   const value = agesObj[key];
// });

// console.log(a);

// {Jennifer: 65}

// let max = agesArray[0].age;
// let min = agesArray[0].age;

// agesArray.forEach((human) => {
//   const age = human.age;
//   max = max > age ? max : age;
//   min = min < age ? min : age;
// });

// console.log(max - min);