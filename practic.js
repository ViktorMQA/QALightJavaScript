// let a = +prompt()
// let b = +prompt()

// function ter(first, second) {
//   let str = a > b ? `${a} over ${b} ` : `${b} over ${a}`
//   return str
// }
// console.log(ter(a, b))

// console.log(null == "\n0\n")
// 5 > 4
// "ананас" > "яблоко"
// "2" > "12"
// undefined == null
// undefined === null
// null == "\n0\n"
// null === +"\n0\n"

// if ("0") {
//     alert( 'Привет' );
//   }

// let login = prompt("Enter yout login")
// let pass = null

// if (login === "Admin") {
//     pass = prompt("Enter your pass")
//     if (pass === "I am boss") {
//         alert("HELLO!")
//     }else if(pass === null){
//         alert("Otmeneno")
//     }else{
//         alert("Wrong pass")
//     }
// } else if (login === null || login === "") {
//     alert("Discart")
// } else { alert("I dont know you") }

// let aa = "hello"

// function gg (a){
// a = " hhhhhh"
// console.log(a)
// }

// gg (aa)

// console.log(aa)

// const user = {
//     hasWife : true,
// }

// let key = "hasWife"

// console.log(user[key])

// const user = {};
// user.name = "Jon";
// user.surname = "Smith";
// user.name = "Peter";
// delete user.name;



// const obj = {};

// function isEmpty(o){
//    for(let key in o){
//        if(key in o){
//            return false;
//        }       
//    }
//    return true;
// }

// console.log(isEmpty(obj))

// obj["8:30"] = "get up"

// console.log(isEmpty(obj))

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   }

//   function sum(o){
//       let num = null;
//       for(let key in o){
//           num += o[key];
//       }
//       return num
//   }

//   console.log(sum(salaries))

// до вызова функции
// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
//   };

//   function x2(o){
//       for(let key in o){
//           if(typeof o[key] === "number"){
//               o[key] *= 2;
//           }
//       }
//       return o;
//   }

//   console.log(x2(menu))

// console.log("height")

// function flatify(obj) {
//     const newObj = {};
//     for (let key in obj) {
//       if (typeof obj[key] !== "object") {
//         newObj[key] = obj[key];
//       } else {
//         for (let key2 in obj[key]) {
//           if (typeof obj[key][key2] !== "object") {
//             newObj[key2] = obj[key][key2]
//             console.log(newObj[key2])
//           } else {
//             for (let key3 in obj[key][key2]) {
//               newObj[key3] = obj[key][key2][key3]
//               console.log(newObj[key3])
//             }
//           }        
//         }
//       }
//     }
//     return newObj;
//   }

//   function flatify(obj) {
//   const newObj = {};
//   for (let key in obj) {
//     if (typeof obj[key] !== "object") {
//       newObj[key] = obj[key];
//     } else {
//       for (let key2 in obj[key]) {
//         newObj[key2] = obj[key][key2];
//       }
//     }
//   }
//   return newObj;
// }

// function yy(){
//     setTimeout(function(){
//         console.log(1);
//       }, 500 );
//     console.log("hhhhhhhh!!!", typeof this)
// }

// function pp(){
//     this.yy()
// }
//  pp()

// function sayHhhh(){
//     console.log("hhhhhhhh!!!");
// }

//  function yy(){
//     setTimeout(function(){
//         console.log(1);
//       }, 500 );
//       sayHhhh()
// }
//  yy()


//  function tt(cb){
//     setTimeout(function(){
//         console.log(1);
//       }, 500 );
//     console.log("hhhhhhhh!!!", typeof this);
// }
//tt()


// const sum = (a, b) => a + b;
// const diff = (a, b) => a - b;
// const multiply = (a, b) => a * b;
// const divide = (a, b) => a / b;

// function calculate(firstNumber, secondNumber, cb) {    
//     if (typeof (firstNumber) != 'number' || typeof (secondNumber) != 'number') {
//         let str = "Invalid args type";
//         return str;
//     }
//     let result = cb(firstNumber, secondNumber);
//     return result;
// }
//console.log(calculate(4, 2, fu));

// const obj = {
//     ttt: 33,
//     rrr: 33,
//     yyy: "kgjhkgjhkj",
//     jfhgkj: null,
//     ggg: null,
//     ggfg: null,

// }

// //obj.string = null

// function uuu(obj) {

//     const newObj = {};
//     let newKey = null;
//     let counter = 0;

//     for (let key in obj) {
//         if (obj[key] !== null) {

//             newKey = typeof obj[key]

//             newObj[newKey] = newObj[newKey] === undefined ? 1 : newObj[newKey] += 1

//         } else {
//             counter++
//             newObj["null"] = counter;
//         }

//     }
//     console.log(newObj);
// }
// uuu(obj);


// function SlackGroupMates(authorName, obj){

//     // 'Alina Kypryk'
//     this.name = authorName;
//     this.contactsBook = obj;


//     this.usersList = {};   

//     this.addRecepient = function (fullName){
//         if(this.contactsBook[fullName] !== undefined){
//             this.usersList[fullName] = contactsBook[fullName]; // { 'Alina Kypryk': 'U02UTV42X6H' }
//         }
//         return this;
//     };


//     this.message = '';

//     this.setMessage = function (someMessage){
//         let ids = '';

//         for (let key in this.usersList) {
//             ids += ids === '' ? `<@${this.usersList[key]}>` : `, <@${this.usersList[key]}>`
//         }

//         this.message = `${this.name} says to ${ids} : ${someMessage}`;
//         return this
//     };



//     this.send = function() {
//         sendSlackMessage(this.message);
//         return this;
//     }
// };

// let slackGroups = new SlackGroupMates('Alina Kypryk', contactsBook);

// slackGroups
//     .addRecepient('Anna Vdovichenko')
//     .addRecepient('Viktor Muzyka')
//     .setMessage('Hello this is first message')
//     //.send();

// console.log(slackGroups);
// let b = isNaN('2e3')

// let str = " jhjghfj "
// console.log(' \' jhjghfj ')
// for (let char of "Hello") {
//     console.log(char); // H,e,l,l,o (char — сначала "H", потом "e", потом "l" и т. д.)
//   }

// let str = 'Str2'
// let str2 = 'str2'

// str.localeCompare(str2)
// console.log(str.localeCompare(str2))






// const wishlist = [
//     { title: 'Tesla Model S', price: 90000 },
//     { title: '4 carat diamond ring', price: 45000 },
//     { title: 'Fancy hacky Sack', price: 5 },
//     { title: 'Gold fidgit spinner', price: 2000 },
//     { title: 'A second Tesla Model S', price: 90000 },
// ];


// // 227005 -- сумма всех покупок
// function shoppingSpree(arr) {
//     let sum = arr.reduce((acc, elem, i, arr) => {
//         let newArr = Object.entries(elem);
//         return acc += newArr[1][1];
//     }, 0);
//     return sum;
// }
// //console.log(shoppingSpree(wishlist));



// // - список покупок [titles]

// function shoppingList(arr) {
//     let list = arr.reduce((acc, elem, i, arr) => {
//         let newArr = Object.entries(elem);
//         return acc += acc === `` ? `${newArr[0][1]}` : `, ${newArr[0][1]}`;
//     }, ``);
//     return list;
// }
// //console.log(shoppingList(wishlist));


// // объект {'Tesla Model S' : 90000, ....}
// function priceList(arr) {
//     let obj = arr.reduce((acc, elem, i, arr) => {
//         let newArr = Object.entries(elem);
//         //let object = {[newArr[0][1]]: newArr[1][1]}
//         //return acc = Object.assign(acc, object);
//         return acc = { ...acc, [newArr[0][1]]: newArr[1][1] };
//     }, {});
//     return obj;
// }
// //console.log(priceList(wishlist));


///////////////////

// const voters = [
//     { name: 'Bob', age: 30, voted: true },
//     { name: 'Jake', age: 32, voted: true },
//     { name: 'Kate', age: 25, voted: false },
//     { name: 'Sam', age: 20, voted: false },
//     { name: 'Phil', age: 21, voted: true },
//     { name: 'Ed', age: 55, voted: true },
//     { name: 'Tami', age: 54, voted: true },
//     { name: 'Mary', age: 31, voted: false },
//     { name: 'Becky', age: 43, voted: false },
//     { name: 'Joey', age: 41, voted: true },
//     { name: 'Jeff', age: 30, voted: true },
//     { name: 'Zack', age: 19, voted: false },
// ];

// ////////////////////////
// //сколько всего людей проголосовало
// function getTotalVoters(voters) {
//     let total = voters.reduce((acc, elem, i, arr) => {
//         let newArr = Object.entries(elem);
//         if (newArr[2][1]) {
//             return acc += 1;
//         }
//         return acc;
//     }, 0);
//     return total;
// }
// //console.log(getTotalVoters(voters));


// Построить объект, который будет хранить следующую статистику:
// Сколько всего людей в возрасте 18-25 в выборке
// Сколько людей в возрасте 18-25 голосовали
// то же самое для возрастных групп 26-35 и 36+

// function getVoterStats(arr) {
//     let newObj = arr.reduce((acc, elem, i, arr) => { 
//         let newArr = Object.entries(elem);
//         if (newArr[1][1] >= 18 && newArr[1][1] <= 25){
//             acc.numYoungPeople += 1;
//             if(newArr[2][1]){
//                 acc.numYoungVotes +=1;
//             }
//         } else if(newArr[1][1] >= 26 && newArr[1][1] <= 35){
//             acc.numMidsPeople += 1;
//             if(newArr[2][1]){
//                 acc.numMidVotesPeople +=1;
//             }
//         } else if(newArr[1][1] >= 36){
//             acc.numSeniorPeople += 1;
//             if(newArr[2][1]){
//                 acc.numSeniorVotesPeople +=1;
//             }
//         }
//         return acc;
//     }, {
//         numYoungVotes: 0,
//         numYoungPeople: 0,
//         numMidVotesPeople: 0,
//         numMidsPeople: 0,
//         numSeniorVotesPeople: 0,
//         numSeniorPeople: 0
//     })
//     return newObj;
// }
// //console.log(getVoterStats(voters));

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

// reduce(() => { }, {
//     numYoungVotes: 0,
//     numYoungPeople: 0,
//     numMidVotesPeople: 0,
//     numMidsPeople: 0,
//     numSeniorVotesPeople: 0,
//     numSeniorPeople: 0
// })



// OBJECTS


// ########################################################################################
// Создать ф-цию flatify, которая будет принимать объект и возвращать плоский объект с теми же свойствами.
// Допускаем, что уровень вложенности <= 3
// ########################################################################################


// easier

const instructorDataEasier = {
    name: 'Elie',
    fullName: 'Elie Johnson',
    additionalData: {
        instructor: true,
        favoriteBasketballTeam: 'New York Knicks',
        numberOfSiblings: 3,
        'is Youngest': true,
    },
    address: {
        city: 'West Orange',
        state: 'NJ',
    },
};


// instructorData

const instructorData = {
    name: 'Elie',
    fullName: 'Elie Johnson',
    additionalData: {
        instructor: true,
        moreDetails: {
            favoriteBasketballTeam: 'New York Knicks',
            numberOfSiblings: 3,
            'is Youngest': true,
            city: 'West Orange',
            state: 'NJ',
        },
    },
};


function flatify(obj) {
    newObj = {}
    for (let key in obj) {
        if (typeof obj[key] !== 'object') {
            newObj[key] = obj[key]
        } else {
            for (let key2 in obj[key]) {
                if (typeof obj[key][key2] !== 'object') {
                    newObj[key2] = obj[key][key2]
                } else {
                    for (let key3 in obj[key][key2]) {
                        newObj[key3] = obj[key][key2][key3]
                    }
                }
            }
        }
    }
    return newObj
}

//console.log(flatify(instructorData))


// const flatInstructor = {
//   name: "Elie",
//   fullName: 'Elie Johnson',
//   instructor: true,
//   favoriteBasketballTeam: "New York Knicks",
//   numberOfSiblings: 3,
//   isYoungest: true,
//   city: "West Orange",
//   state: "NJ",
// }

// ########################################################################################
// создать fucntion countTypes (obj) - принимает объект и считает количество свойств каждого типа.
// результат вернуть в виде объекта, где ключи - тип, а свойства - количество свойств этого типа в исходном объекте.
// ########################################################################################

const instructorDataCountProps = {
    name: 'Elie',
    fullName: 'Elie Johnson',
    instructor: true,
    favoriteBasketballTeam: 'New York Knicks',
    numberOfSiblings: 3,
    'is Youngest': true,
    address: {
        // это просто свойство типа object; city и state не должн считаться
        city: 'West Orange',
        state: 'NJ',
    },
    hobbies: null,
};


function countTypes(obj) {
    const newObj = {}
    let newKey = null
    for (let key in obj) {
        if (obj[key] !== null) {
            newKey = typeof obj[key]
            newObj[newKey] = newObj[newKey] === undefined ? 1 : newObj[newKey] += 1
        } else {
            newObj['null'] = newObj['null'] === undefined ? 1 : newObj[newKey] += 1
        }
    }
    return newObj;
}
//console.log(countTypes (instructorDataCountProps))


//{ string: 3, boolean: 2, number: 1, object: 1, null: 1 }

// ########################################################################################
// Функция buildInstructorObj принимает плоский объект и возврщает новый с теми же свойствами,но:
// Если в исходном встречаются свойства city и state - в новом - они должны объединиться в свойство address : {city: [value], state: [value]}
// Если встречаются свойста instructor, favoriteBasketballTeam, numberOfSiblings, 'is Youngest' - объеденить их в свойство additionalData: {...}
// ########################################################################################

const initialInstructor = {
    name: 'Elie',
    fullName: 'Elie Johnson',
    instructor: true,
    favoriteBasketballTeam: 'New York Knicks',
    numberOfSiblings: 3,
    isYoungest: true,
    city: 'West Orange',
    state: 'NJ',
};

function buildInstructorObj(obj) {
    const newObj = {}
    for (let key in obj) {
        if (key === 'city' || key === 'state') {  
            if ("address" in newObj){
                newObj.address[key] = obj[key]
            }else{
                newObj.address = { key: obj[key]}
            }
        } else {
            newObj[key] = obj[key]
        }
    }
    return newObj
}
console.log(buildInstructorObj(initialInstructor))



  // const instructorWithoutNulls = {
  //   name: 'Elie',
  //   fullName: 'Elie Johnson',
  //   instructor: true,
  //   favoriteBasketballTeam: 'New York Knicks',
  //   city: 'West Orange',
  // };
