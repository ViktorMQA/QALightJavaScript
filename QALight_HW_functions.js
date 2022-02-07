// Ф-ция repeat принимает строку и число в качестве параметров и возвращает строку, повторенную <число> раз
// repeat("#", 5) // ===> "#####"

function repeat(someString, num) {
    let str = ""
    for (let i = 0; i < num; i++) {
        str += someString
    }
    return str
}
console.log(repeat("*", 8))

// Функция getFirstNPrimes находит первые n простых чисел и возвращает стоку с числами через пробел и запятую
// getFirstNPrimes(6)  // ==> "2, 3, 5, 7, 11, 13"


let countPrimes = 50;

function getFirstNPrimes2(cntPrimes) {
    let count = 0;
    let str = null;
    for (let i = 2; i < 1000; i++) {
        if (fun(i)) {
            str += !str ? i : `, ${i}`;
            count++;
            if (count === cntPrimes) {
                break;
            }
        } else {
            continue;
        }
    }
    console.log(str);
}

function fun(num) {
    for (j = 2; j < num; j++) {
        if (num % j === 0) {
            return false;
        }
    }
    return true;
}
//getFirstNPrimes2(countPrimes);

function getFirstNPrimes(cntPrimes) {
    let count = 0;
    let str = "";
    let i = 0;
    while(count <= cntPrimes){        
        if(isPrime(i)){
            str += !str ? i : `, ${i}`;
            count++            
        }
        i++
    }
    console.log(str);
}
//getFirstNPrimes(50)


// Ф-ция calculate принимает 2 числа и коллбэк. Возвращает результат вычислений колбэка с данными аргументами
// Создать 4 колбэка - sum(a, b), diff(a, b), multiply (a, b), divide(a,b)
// Сделайте проверку типов аргументов: если хотя бы один из 2 первых аргументов - не число просто верните строку - "Invalid args type"
// Функция по умолчанию пусть будет sum. Т.е. если не передавать 3й аргумент, calculate вернет сумму чисел
// calculate(4, 5, multiply) // ==> 20

const sum = (a, b) => a + b;
const diff = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

function calculate(firstNumber, secondNumber, callback = sum) {
    if (typeof (firstNumber) != 'number' || typeof (secondNumber) != 'number') {
        let str = "Invalid args type";
        return str;
    }
    let result = callback(firstNumber, secondNumber);
    return result;
}
//console.log(calculate(4, 2, multiply));


// Ф-ция printNumbers принимает число num и колбэк cb. Должна выводить все числа до num, которые которые проходят проверку колбэком.
// Аргументы по умолчанию: num = 100, cb = isPrime
// printNumbers(7, isEven) // ==> 2, 4, 6
// printNumbers(7, isOdd) // ==> 1, 3, 5, 7
// printNumbers(7, isPrime) // ==> 2, 3, 5, 7

function printNumbers(num = 100, cb = isPrime) {
    let str = ""
    for (let i = 0; i < num; i++) {
        if (cb(i)) {
            str += !str ? i : `, ${i}`
        }
    }
    return str;
}

function isEven(i) {
    if (i % 2 !== 0 || i === 0) {
        return false;
    }
    return true;
}

function isOdd(i) {
    if (i % 2 !== 0) {
        return true;
    }
    return false;
}

function isPrime(i) {
    if (i <= 1) {
        return false;
    }
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            return false;
        }
    }
    return true;
}
//console.log(printNumbers(100, isPrime));

