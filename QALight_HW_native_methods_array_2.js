const wishlist = [
  { title: 'Tesla Model S', price: 90000 },
  { title: '4 carat diamond ring', price: 45000 },
  { title: 'Fancy hacky Sack', price: 5 },
  { title: 'Gold fidgit spinner', price: 2000 },
  { title: 'A second Tesla Model S', price: 90000 },
];

// 227005 -- сумма всех покупок
// function shoppingSpree(arr) {
//   let sum = arr.reduce((acc, elem, i, arr) => {
//       let newArr = Object.entries(elem);
//       return acc += newArr[1][1];
//   }, 0);
//   return sum;
// }
// console.log(shoppingSpree(wishlist));

// optimal variant
function shoppingSpree(arr) {
  let sum = arr.reduce((acc, elem, i, arr) => {
    return acc += elem.price;
  }, 0);
  return sum;
}
//console.log(shoppingSpree(wishlist));


// - список покупок [titles]
// function shoppingList(arr) {
//   let list = arr.reduce((acc, elem, i, arr) => {
//     let newArr = Object.entries(elem);
//     return acc += acc === `` ? `${newArr[0][1]}` : `, ${newArr[0][1]}`;
//   }, ``);
//   return list;
// }
// console.log(shoppingList(wishlist));

// optimal variant
function shoppingList(arr) {
  let list = arr.reduce((acc, elem, i, arr) => {
    return acc += acc === `` ? `${elem.title}` : `, ${elem.title}`;
  }, ``);
  return list;
}
//console.log(shoppingList(wishlist));


// объект {'Tesla Model S' : 90000, ....}
// function priceList(arr) {
//   let obj = arr.reduce((acc, elem, i, arr) => {
//     let newArr = Object.entries(elem);
//     //let object = {[newArr[0][1]]: newArr[1][1]}
//     //return acc = Object.assign(acc, object);
//     return acc = { ...acc, [newArr[0][1]]: newArr[1][1] };
//   }, {});
//   return obj;
// }
//console.log(priceList(wishlist));

// optimal variant
function priceList(arr) {
  let obj = arr.reduce((acc, elem, i, arr) => {
    let object = {[elem.title]: elem.price};
    return acc = Object.assign(acc, object);
    //return acc = { ...acc, [elem.title]: elem.price };
  }, {});
  return obj;
}
//console.log(priceList(wishlist));

///////////////////

const voters = [
  { name: 'Bob', age: 30, voted: true },
  { name: 'Jake', age: 32, voted: true },
  { name: 'Kate', age: 25, voted: false },
  { name: 'Sam', age: 20, voted: false },
  { name: 'Phil', age: 21, voted: true },
  { name: 'Ed', age: 55, voted: true },
  { name: 'Tami', age: 54, voted: true },
  { name: 'Mary', age: 31, voted: false },
  { name: 'Becky', age: 43, voted: false },
  { name: 'Joey', age: 41, voted: true },
  { name: 'Jeff', age: 30, voted: true },
  { name: 'Zack', age: 19, voted: false },
];

////////////////////////
//сколько всего людей проголосовало
// function getTotalVoters(arr) {
//   let total = arr.reduce((acc, elem, i, arr) => {
//     let newArr = Object.entries(elem);
//     if (newArr[2][1]) {
//       return acc += 1;
//     }
//     return acc;
//   }, 0);
//   return total;
// }
//console.log(getTotalVoters(voters));

// optimal variant
function getTotalVoters(arr) {
  let total = arr.reduce((acc, elem, i, arr) => {
    if (elem.voted) {
      return acc += 1;
    }
    return acc;
  }, 0);
  return total;
}
//console.log(getTotalVoters(voters));

// Построить объект, который будет хранить следующую статистику:
// Сколько всего людей в возрасте 18-25 в выборке
// Сколько людей в возрасте 18-25 голосовали
// то же самое для возрастных групп 26-35 и 36+
// function getVoterStats(arr) {
//   let newObj = arr.reduce((acc, elem, i, arr) => {
//     let newArr = Object.entries(elem);
//     if (newArr[1][1] >= 18 && newArr[1][1] <= 25) {
//       acc.numYoungPeople += 1;
//       if (newArr[2][1]) {
//         acc.numYoungVotes += 1;
//       }
//     } else if (newArr[1][1] >= 26 && newArr[1][1] <= 35) {
//       acc.numMidsPeople += 1;
//       if (newArr[2][1]) {
//         acc.numMidVotesPeople += 1;
//       }
//     } else if (newArr[1][1] >= 36) {
//       acc.numSeniorPeople += 1;
//       if (newArr[2][1]) {
//         acc.numSeniorVotesPeople += 1;
//       }
//     }
//     return acc;
//   }, {
//     numYoungVotes: 0,
//     numYoungPeople: 0,
//     numMidVotesPeople: 0,
//     numMidsPeople: 0,
//     numSeniorVotesPeople: 0,
//     numSeniorPeople: 0
//   })
//   return newObj;
// }
//console.log(getVoterStats(voters));

// optimal variant
function getVoterStats(arr) {
  let newObj = arr.reduce((acc, elem, i, arr) => {
    if (elem.age >= 18 && elem.age <= 25) {
      acc.numYoungPeople += 1;
      if (elem.voted) {
        acc.numYoungVotes += 1;
      }
    } else if (elem.age >= 26 && elem.age <= 35) {
      acc.numMidsPeople += 1;
      if (elem.voted) {
        acc.numMidVotesPeople += 1;
      }
    } else if (elem.age >= 36) {
      acc.numSeniorPeople += 1;
      if (elem.voted) {
        acc.numSeniorVotesPeople += 1;
      }
    }
    return acc;
  }, {
    numYoungVotes: 0,
    numYoungPeople: 0,
    numMidVotesPeople: 0,
    numMidsPeople: 0,
    numSeniorVotesPeople: 0,
    numSeniorPeople: 0
  })
  return newObj;  
}
//console.log(getVoterStats(voters));




function voterResults(arr) {
  let str = `Total votes: ${getTotalVoters(arr)}, other statistics:`
  console.log(str);
  console.log(getVoterStats(arr));
}
//voterResults(voters);

/*
{
numYoungVotes: 1,
numYoungPeople: 4,
numMidVotesPeople: 3,
numMidsPeople: 4,
numSeniorVotesPeople: 3,
numSeniorPeople: 4
}
*/

// reduce(() => {}, {
// numYoungVotes: 0,
// numYoungPeople: 0,
// numMidVotesPeople: 0,
// numMidsPeople: 0,
// numSeniorVotesPeople: 0,
// numSeniorPeople: 0
// })
