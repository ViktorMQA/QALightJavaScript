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

function flatify(obj) {
    const newObj = {};
    for (let key in obj) {
      if (typeof obj[key] !== "object") {
        newObj[key] = obj[key];
      } else {
        for (let key2 in obj[key]) {
          if (typeof obj[key][key2] !== "object") {
            newObj[key2] = obj[key][key2]
            console.log(newObj[key2])
          } else {
            for (let key3 in obj[key][key2]) {
              newObj[key3] = obj[key][key2][key3]
              console.log(newObj[key3])
            }
          }        
        }
      }
    }
    return newObj;
  }

  function flatify(obj) {
  const newObj = {};
  for (let key in obj) {
    if (typeof obj[key] !== "object") {
      newObj[key] = obj[key];
    } else {
      for (let key2 in obj[key]) {
        newObj[key2] = obj[key][key2];
      }
    }
  }
  return newObj;
}

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

function sayHhhh(){
    console.log("hhhhhhhh!!!");
}

//  function yy(){
//     setTimeout(function(){
//         console.log(1);
//       }, 500 );
//       sayHhhh()
// }
//  yy()


 function tt(cb){
     cb()     
    setTimeout(function(){
        console.log(1);
      }, 500 );    
      cb()
}
 tt(function(){
    console.log("hhhhhhhh!!!");
})


const sum = (a, b) => a + b;
const diff = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

function calculate(firstNumber, secondNumber) {
    if (typeof (firstNumber) != 'number' || typeof (secondNumber) != 'number') {
        let str = "Invalid args type";
        return str;
    }
    let result = callback(firstNumber, secondNumber);
    return result;
}
//console.log(calculate(4, 2, multiply));