// 1
//НАписать ф-цию sum, которая будет вызываться следующим образом:
// sum(2)(3)(5)()  ===> 10
// должна возвращать результат, если вызвана без аргументов


function sum(a) {
  let result = a;
  return function f(b) {
    if (b) {
      result += b
      return f;
    } else {
      return result;
    }
  }
}
//console.log(sum(2)(3)(5)());

// Усложненный вариант - при каждом вызове может принимать любое кол-во аргументов
// sum (1,2)(3)(1,1,1)() ===> 9
// sum () ===> 0
// sum (1)(2,1)() ===> 4


function sum2(...a) {
  if (a.length === 0) {
    return 0;
  }
  let result = a;
  return function f(...b) {
    if (b.length !== 0) {
      for (let elem of b) {
        result.push(elem)
      }
      return f;
    } else {
      let sum = result.reduce((acc, elem) => {
        return acc += elem;
      }, 0)
      return sum;
    }
  }
}
//console.log(sum2());



// 2
// Написать функции-фильтры ageLessThan(n), ageBetween(a, b), byName([...names])
// const filteredVoters = voters.filter(byName(['Bob', 'Mary', 'Jeff']))
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

function ageLessThan(n) {
  return function (elem) {
    return elem.age < n
  }
};

function ageBetween(a, b) {
  return function (elem) {
    return elem.age >= a && elem.age <= b
  }
}

function byName(...names) {
  return function (elem) {
    return names.includes(elem.name)
  }
}


// let ageList1 = voters.filter(ageLessThan(40));
// console.log(ageList1);

// let ageList2 = voters.filter(ageBetween(20, 25));
// console.log(ageList2);

// let ageList3 = voters.filter(byName('Bob', 'Mary', 'Jeff'));
// console.log(ageList3);



// 3
//Написать ф-цию bind(cxt, func)
// const letterFilter = bind('ababababa', [].filter)
// letterFilter((letter) => letter === 'a')   /// ['a', 'a', 'a', 'a', 'a']



function bind(cxt, func) {
  return function (...arg) {
    return func.apply(cxt, arg)
  }
}


const letterFilter = bind('ababababa', Array.prototype.filter) // [].filter
console.log(letterFilter((letter) => letter === 'a'))


// 4 Угадать число

function guessGame(attempts) {
  let att = attempts;
  let counter = 0;
  const answer = Math.floor(Math.random() * 10);
  console.log("answer is", answer)
  return function (n) {
    if (counter === att) {
      return console.log("no more attempts")
    }
    counter++
    if (n < answer) {
      return console.log("too low")
    }
    if (n > answer) {
      return console.log("too high")
    }
    if (n === answer) {
      return console.log("correct")
    }
  }
}

//const playRound1 = guessGame(1); //допустим, правильный ответ = 5
// playRound1(1) // "too low"
// playRound1(7) // "too high"
// playRound1(5) // "correct"
// playRound1(5) // "no more attempts"
//const playRound2 = guessGame(5);
//....
