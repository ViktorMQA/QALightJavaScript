// Ф-ция repeat принимает строку и число в качестве параметров и возвращает строку, повторенную <число> раз
// repeat("#", 5) // ===> "#####"

function repeat(str, num) {
    let string = "";
    for (let i = 0; i < num; i++) {
        string += str
    }
    return string;
}

// let str = repeat("t", 5)
// console.log(str)

// Функция getFirstNPrimes находит первые n простых чисел и возвращает стоку с числами через пробел и запятую
// getFirstNPrimes(6)  // ==> "2, 3, 5, 7, 11, 13"

function getFirstNPrimes(n) {
    let str = "";
    let count = 0;
    let i = 0;
    while (count <= n) {
        if (isPrime(i)) {
            count++;
            str += str === "" ? `${i}` : `, ${i}`
        }
        i++;
    }
    return str;
}

function isPrime(num) {
    if (num <= 1) {
        return false;
    }

    for (let j = 2; j < num; j++) {
        if (num % j === 0) {
            return false;
        }
    }
    return true;
}

//console.log(getFirstNPrimes(6))

// Ф-ция calculate принимает 2 числа и коллбэк. Возвращает результат вычислений колбэка с данными аргументами
// Создать 4 колбэка - sum(a, b), diff(a, b), multiply (a, b), divide(a,b)
// Сделайте проверку типов аргументов: если хотя бы один из 2 первых аргументов - не число просто верните строку - "Invalid args type"
// Функция по умолчанию пусть будет sum. Т.е. если не передавать 3й аргумент, calculate вернет сумму чисел
// calculate(4, 5, multiply) // ==> 20



const sum = (a, b) => { return a + b }
const diff = (a, b) => { return a - b }
const multiply = (a, b) => { return a * b }
const devide = (a, b) => { return a / b }


function calculate(a, b, cb = sum) {
    const str = "Invalid args type"
    if (typeof a !== 'number' || typeof b !== 'number') {
        return str;
    }
    const result = cb(a, b);
    return result;
}
//console.log(calculate("a",5, multiply))


// Ф-ция printNumbers принимает число num и колбэк cb. Должна выводить все числа до num, которые которые проходят проверку колбэком.
// Аргументы по умолчанию: num = 100, cb = isPrime
// printNumbers(7, isEven) // ==> 2, 4, 6
// printNumbers(7, isOdd) // ==> 1, 3, 5, 7
// printNumbers(7, isPrime) // ==> 2, 3, 5, 7


const isEven = (n) => {
    if (n % 2 === 0) {
        return true;
    }
    return false
}
const isOdd = (n) => {
    if (n % 2 === 0) {
        return false;
    }
    return true
}



function printNumbers(num, cb = isEven) {
    let str = ""
    for (let i = 1; i <= num; i++) {
        if (cb(i)) {
            str += str === "" ? `${i}` : `, ${i}`
        }
    }
    return str;
}

//console.log(printNumbers(5, isPrime))

// 1 Посчитать гласные в предложении - countVowels(phrase), вернуть объект {a: 5, e: 6, i: 2, o: 3, u: 1, y: 0}

function countVowels(frase) {
    const obj = {
        a: 0,
        e: 0,
        i: 0,
        o: 0,
        u: 0,
        y: 0
    }
    for (let char of frase) {
        if (char === "a") {
            obj.a += 1
        } else if (char === "e") {
            obj.e += 1
        } else if (char === "i") {
            obj.i += 1
        } else if (char === "o") {
            obj.o += 1
        } else if (char === "u") {
            obj.u += 1
        } else if (char === "y") {
            obj.y += 1
        }
    }
    return obj;
}
//console.log(countVowels('rrtrrtaayyyuooooiiiiii'));


// 2 Какая буква чаще всего встречается в предложении getMostFrequentLetter(phrase)

function getMostFrequentLetter(phrase) {
    obj = {};
    maxCaunt = 0;
    letter = "";
    for (let char of phrase) {
        obj[char] = obj[char] === undefined ? 1 : obj[char] += 1;
    }
    console.log(obj);
    for (let key in obj) {
        if (obj[key] > maxCaunt) {
            maxCaunt = obj[key];
            letter = key;
        }

    }
    return `${letter} ${maxCaunt}`;
}
//console.log(getMostFrequentLetter('qwweeerrrrtttttyyyyyyuuuuuuuiiiiiiii'))



// 3 Каждое слово с большой буквы capitalize(str) // this is a sample -> This Is A Sample

function capitalize(str) {
    let array = str.split(' ');
    let string = ''
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i][0].toUpperCase() + array[i].slice(1);
    }
    string = array.join(" ")

    return string;
}
//console.log(capitalize('this is a sample'))



// 4 Перевернуть строку  - reverse(str)  // string --> gnirts //2 способа - цикл, и arr.reverse

function reverse(str) {
    let arr = str.split('');
    let arr2 = [];
    let string = '';
    for (let i = arr.length; i >= 0; i--) {
        arr2.push(arr[i])

    }
    string = arr2.join('');
    return string;

}
//console.log(reverse("string"))


// 5 является ли строка палиндромом  - isPalindrome (str)  // 'tenet', 'abba','100001'

function isPalindrome(str) {
    let result = null;
    let str2 = str.split('').reverse().join('');
    result = str.localeCompare(str2);
    if (result === 0) {
        return true;
    }
    console.log(str2)
    return false;
}
//console.log(`Your phrase is palindrome - ${isPalindrome("100001")}`)


// 6 являются ли 2 строки анаграммами - isAnagram(strA, strB) // 'rail safety' -- 'fairy tales'






// 7 функция форматирования - humanize_format(num) // 1 -> 1st, 32 -> 32nd, 23 -> 23rd, 65 -> 65th

function humanizeFormat(num) {
    let str = ''
    if (String(num).endsWith(1)) {
        str = num + 'st'
    } else if (String(num).endsWith(2)) {
        str = num + 'nd'
    } else if (String(num).endsWith(3)) {
        str = num + 'rd'
    } else if (String(num).endsWith(5)) {
        str = num + 'th'
    } else {
        str = num + 'th'
    }
    return str;
}
//console.log(humanizeFormat(46))


// 8 функция insertDash(num) принимает число и вставляет  "-" между двумя четными цифрами  // 025468 --->  0-254-6-8

function insertDash(num) {
    let arr = num.split('');
    let str = '';
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0 && arr[i + 1] % 2 === 0) {
            str += `${arr[i]}-`;
        } else {
            str += arr[i];
        }
    }
    return str;
}

//console.log(insertDash('025468'))


// 9 реализовать функцию unshift(arr)

// Array.prototype.unshift = function (...args) {
//     if (args.length === 0) {
//         return this.length;
//     }
//     for (let i = this.length - 1 + args.length; i >= args.length; --i) {
//         this[i] = this[i - args.length];
//     }
//     for (let i = 0; i < args.length; ++i) {
//         this[i] = args[i];
//     }
//     return this.length;
// }

// 10 реализовать ф-цию shift(arr)

// Array.prototype.shift = function () {
//     if (this.length === 0) {
//         return;
//     }
//     let result = this[0];
//     for (let i = 1; i < this.length; ++i) {
//         this[i - 1] = this[i];
//     }
//     this.length--;
//     return result;
// }

let arr = [1, 2, 3, 4]
let arr2 = []
for (let i = 0; i < arr.length; i++) {
    arr2[i + 1] = arr[i]
}
arr2[0] = 5
//console.log(arr2)

let arr3 = ['hello', 'my', 'friend']

Array.prototype.forEach2 = function (cb) {
    for (let i = 0; i < this.length; i++) {
        cb(this[i], i, this)
    }
}

//arr3.forEach2((elem, i, arr) => {console.log(`element: '${elem}' index: ${i} array: [${arr}]`);})

Array.prototype.map2 = function (cb) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(cb(this[i], i, this))
    }
    return result;
}

const obj1 = [{ dis: 10 }, { dis: 20 }, { dis: 30 }, { dis: 40 }];
const arr5 = obj1.map((elem, i, arr) => {
    return { dis: elem.dis * 2 }
})
//console.log(arr5)

let str = 'he my friend jkjkjkjkj'

let newArr = str.split(' ').map2((elem) => {
    let ii = elem + '000'
    return ii;
})

//console.log(newArr)

Array.prototype.finde2 = function (cb) {
    let newArr2 = [];
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) {
            newArr2.push(this[i]);
            return newArr2;
        }
    }
}

let ttt = str.split(' ').finde2((word, i, arr) => { return word.length > 2 })
//console.log(ttt)


Array.prototype.filter2 = function (cb) {
    let arr4 = [];
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) {
            arr4.push(this[i]);
        }
    }
    return arr4;
}
let ttt2 = str.split(' ').filter2((word, i, arr) => { return word.length > 2 })
//console.log(ttt2)

let someArr = [1, 2, 3, 4]
const obj = [{ dis: 10 }, { dis: 20 }, { dis: 30 }, { dis: 40 }]
Array.prototype.reduce2 = function (cb, firstItem) {
    let accum = firstItem;
    for (let i = 0; i < this.length; i++) {
        accum = cb(accum, this[i], i, this)
    }
    return accum;
}

let sum2 = someArr.reduce2((acc, elem, i, arr) => {
    acc += elem;
    return acc;
}, 10)
//console.log(sum2)

let sum3 = obj.reduce2((acc, elem, i, arr) => {
    acc.push({ dis: elem.dis + 100 })
    return acc
}, [])
//console.log(sum3)

Array.prototype.reduce3 = function (cb, firstElement) {
    let acc = firstElement;
    for (let i = 0; i < this.length; i++) {
        acc = cb(acc, this[i], i, this)
    }
    return acc;
}

const wishlist = [
    { title: 'Tesla Model S', price: 90000 },
    { title: '4 carat diamond ring', price: 45000 },
    { title: 'Fancy hacky Sack', price: 5 },
    { title: 'Gold fidgit spinner', price: 2000 },
    { title: 'A second Tesla Model S', price: 90000 },
];


// 227005 -- сумма всех покупок

function priceSum(arr) {
    let summ = arr.reduce((acc, elem, i, arr) => {
        acc += elem.price
        return acc
    }, 0)
    return summ;
}
//console.log(priceSum(wishlist))

// - список покупок [titles]

function titleLisr(array) {
    let list = array.reduce3((acc, elem, i, arr) => {
        acc += acc === '' ? `${elem.title}` : `, ${elem.title}`
        return acc;
    }, '')
    return list;
}
//console.log(titleLisr(wishlist))

// объект {'Tesla Model S' : 90000, ....}

function justObj(array) {
    const newObj = array.reduce3((acc, elem, i, arr) => {
        let obj = { [elem.title]: elem.price };
        acc = Object.assign(acc, obj);
        return acc;
    }, {})
    return newObj;
}
//console.log(justObj(wishlist))

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

function allVoted(array) {
    let sumVoted = array.reduce((acc, elem, i, arr) => {
        if (elem.voted) { acc += 1 }
        return acc;
    }, 0)
    return `all who voted - ${sumVoted}`;
}
//console.log(allVoted(voters))

// Построить объект, который будет хранить следующую статистику:
// Сколько всего людей в возрасте 18-25 в выборке
// Сколько людей в возрасте 18-25 голосовали
// то же самое для возрастных групп 26-35 и 36+

function allStatistics(array) {
    let all = array.reduce((acc, elem, i, arr) => {
        if (elem.age >= 18 && elem.age <= 25) {
            acc['all 18-25'] += 1
            if (elem.voted) {
                acc['voited 18-25'] += 1
            }
        } else if (elem.age >= 26 && elem.age <= 35) {
            acc['all 26-35'] += 1
            if (elem.voted) {
                acc['voited 26-35'] += 1
            }
        } else if (elem.age >= 36) {
            acc['all 36'] += 1
            if (elem.voted) {
                acc['voited 36'] += 1
            }
        }
        return acc;
    }, {
        'all 18-25': 0,
        'voited 18-25': 0,
        'all 26-35': 0,
        'voited 26-35': 0,
        'all 36': 0,
        'voited 36': 0,
    })
    return all;
}
//console.log(allStatistics(voters))


const arr55 = [1, 2, 3, 4, 4, 3, 2, 1]

const set = new Set(arr55);
//console.log(set)




// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.

// Например:

// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10
// ...
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050
// Сделайте три варианта решения:

// С использованием цикла.
// Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
// С использованием формулы арифметической прогрессии.

function sum22(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum += i
    }
    return sum;
}
// console.log(sum22(4))

function sum33(n) {
    if (n === 1) {
        return n;
    }
    return n + sum33(n - 1);
}
// console.log(sum33(4))

// (1-1) = 1
// 2 + (2-1) = 3
// 3 + (3-1) = 6 
// 4 + (4-1) = 10



// Факториал натурального числа – это число, умноженное на "себя минус один", затем на "себя минус два", и так далее до 1. Факториал n обозначается как n!

// Определение факториала можно записать как:

// n! = n * (n - 1) * (n - 2) * ...*1
// Примеры значений для разных n:

// 1! = 1
// 2! = 2 * 1 = 2
// 3! = 3 * 2 * 1 = 6
// 4! = 4 * 3 * 2 * 1 = 24
// 5! = 5 * 4 * 3 * 2 * 1 = 120
// Задача – написать функцию factorial(n), которая возвращает n!, используя рекурсию.

function factorial(n) {
    if (n === 1) {
        return n;
    }
    return n * factorial(n - 1)
}
//console.log(factorial(5))

// (1 - 1) = 1
// 2 * (2 - 1) = 2
// 3 * (3 - 1) = 6
// 4 * (4 - 1) = 24
// 5 * (5 - 1) = 120



let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

function printList(list) {

    console.log(list.value); // выводим текущий элемент

    if (list.next) {
        printList(list.next); // делаем то же самое для остальной части списка
    }

}

//printList(list);

// Array.prototype.forEach23 = function (cb) {
//     for(let i = 0; i < this.length; i++){
//         cb(this[i], i, this)
//     }
// }

let arrayString = ["one", "two", "three", "four"]
let arrNumber = [23, 44, 53, 22]
// arrayString.forEach23((elem)=>{
// console.log(elem + " cifra")
// })

// Array.prototype.maph23 = function (cb) {
//     let result = [];
//     for (let i = 0; i < this.length; i++) {
//         result.push(cb(this[i], i, this))
//     }
//     return result
// }

// let jdgf = arrayString.maph23((elem, i, arr) => {
//     return elem += "ttt"
// })
// console.log(jdgf)

Array.prototype.reduce44 = function (cb, first) {
    let acc = first;
    for (let i = 0; i < this.length; i++){
        acc = cb(acc, this[i], i, this)
    }
    return acc;
}
let kdjfkd = arrNumber.reduce44((acc, elem)=>{
   return acc += elem*10;
}, 0)
//console.log(kdjfkd)

let car = 'red' && 'green';
console.log(car)