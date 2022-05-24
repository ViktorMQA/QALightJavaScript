// 1 Посчитать гласные в предложении - countVowels(phrase), вернуть объект {a: 5, e: 6, i: 2, o: 3, u: 1, y: 0}

function countVowels(phrase) {
    const obj = {};
    for (let char of phrase) {
        if (char === 'a') {
            obj[char] = obj[char] === undefined ? 1 : obj[char] += 1;
        } else if (char === 'e') {
            obj[char] = obj[char] === undefined ? 1 : obj[char] += 1;
        } else if (char === 'i') {
            obj[char] = obj[char] === undefined ? 1 : obj[char] += 1;
        } else if (char === 'o') {
            obj[char] = obj[char] === undefined ? 1 : obj[char] += 1;
        } else if (char === 'u') {
            obj[char] = obj[char] === undefined ? 1 : obj[char] += 1;
        } else if (char === 'y') {
            obj[char] = obj[char] === undefined ? 1 : obj[char] += 1;
        }
    }
    return obj;
}
//console.log(countVowels('ljdhurgibknbkdziojd'));




// 2 Какая буква чаще всего встречается в предложении getMostFrequentLetter(phrase)

function getMostFrequentLetter(phrase) {
    const obj = {};
    let maxCount = 0;
    let letter = '';

    for (let char of phrase) {
        obj[char] = obj[char] === undefined ? 1 : obj[char] += 1;
    }
    for (let key in obj) {
        if (obj[key] > maxCount) {
            maxCount = obj[key];
            letter = key;
        }
    }
    let str = `the letter '${letter}' occours ${maxCount} times`;
    return str;
}
//console.log(getMostFrequentLetter('qqww'));




// 3 Каждое слово с большой буквы capitalize(str) // this is a sample -> This Is A Sample

function capitalize(str) {
    let arr = str.split(' ');
    let string = '';
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
        string += string === '' ? arr[i] : ` ${arr[i]}`;
    }
    return string;
}
//console.log(capitalize('hi my name is viktor'));



// 4 Перевернуть строку  - reverse(str)  // string --> gnirts //2 способа - цикл, и arr.reverse
//var 1
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

// var 2
function reverse2(str) {
    let arr = str.split(' ').reverse().join(' ');
    return arr;
}
//console.log(reverse2('hi my name is viktor'));



// 5 является ли строка палиндромом  - isPalindrome (str)  // 'tenet', 'abba','100001'
function isPalindrome(str) {
    let arr = str.split('').reverse();
    let string = '';
    for (let i = 0; i < arr.length; i++) {
        string += arr[i]
    }
    if (str.localeCompare(string) === 0) {
        return true;
    } else {
        return false;
    }
}
//console.log(isPalindrome('abba'));

// var2
function isPalindrome2(str) {
    let arr = str.split('').reverse().join('');
    if (str.localeCompare(arr) === 0) {
        return true;
    } else {
        return false;
    }
}
//console.log(isPalindrome2('abba'));

// 6 являются ли 2 строки анаграммами - isAnagram(strA, strB) // 'rail safety' -- 'fairy tales'






// 7 функция форматирования - humanize_format(num) // 1 -> 1st, 32 -> 32nd, 23 -> 23rd, 65 -> 65th

function humanize_format(num) {
    let str = '';
    if (String(num).endsWith('1')) {
        str += num + 'st'
    } else if (String(num).endsWith('2')) {
        str += num + 'nd'
    } else if (String(num).endsWith('3')) {
        str += num + 'rd'
    } else {
        str += num + 'th'
    }
    return str;
}
//console.log(humanize_format(45454));




// 8 функция insertDash(num) принимает число и вставляет  "-" между двумя четными цифрами  // 025468 --->  0-254-6-8

function insertDash(num) {
    let arr = String(num).split('');
    let str = '';
    for (let i = 0; i < arr.length; i++) {
        if ((arr[i] % 2 === 0) && (arr[i + 1] % 2 === 0)) {
            str += `${arr[i]}-`;
        }
        else {
            str += arr[i];
        }

    }
    return str;
}
//console.log(insertDash(1025468));


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

