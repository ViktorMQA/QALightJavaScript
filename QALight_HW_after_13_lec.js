//1
//Given a string, replace every letter with its position in the alphabet.
//If anything in the text isn't a letter, ignore it and don't return it.

//alphabetPosition("The sunset sets at twelve o' clock.") ==> "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

function leterNumber(string) {
    let str = 'abcdefghijklmnopqrstuvwxyz';
    let obj = {};
    str.split('').forEach((elem, i) => {
        obj[elem] = i + 1;
    })
    let leterNumber = '';
    string.toLowerCase().split('').forEach((elem) => {
        if (elem in obj) {
            leterNumber += leterNumber === '' ? `${obj[elem]}` : ` ${obj[elem]}`;
        }
    })
    return leterNumber;
}
//console.log(leterNumber("The sunset sets at twelve o' clock."));

//2
//Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
//Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
//If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"

function f(str) {
    let arr = str.split(' ');
    let obj = {};
    arr.forEach((elem) => {
        for (let char of elem) {
            if (!isNaN(char)) {
                obj[elem] = Number(char);
            }
        }
    });
    let sortArr = Object.entries(obj).sort((a, b) => {
        return a[1] - b[1];
    });
    let finelString = sortArr.reduce((acc, elem) => {
        return acc = acc === '' ? elem[0] : acc += ` ${elem[0]}`;
    }, '');
    console.log(finelString);
}
//f("is2 Thi1s T4est 3a")

//3
//Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:
// url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// url = "https://www.cnet.com"                -> domain name = cnet"

function takeDomain(url) {
    let arr = url.split('//');
    let arr2 = arr[1].split('.');
    let str = ''
    if (arr2[0] === 'www') {
        str += arr2[1];
    } else {
        str += arr2[0];
    }
    console.log(str)
}
//takeDomain('https://www.cnet.com')

//4
//Given a varying number of integer arguments, return the digits that are not present in any of them.
// [12, 34, 56, 78]  =>  "09"
// [2015, 8, 26]     =>  "3479"
//Note: the digits in the resulting string should be sorted.

function getMissingNumber(arr) {
    let array = arr.join('').split('');
    let numbers = '0123456789';

    numbers = numbers.split('');

    let result = [];
    numbers.forEach((elem) => {
        if (!array.includes(elem)) {
            result.push(Number(elem));
        }
    });
    return result.sort((a, b) => a - b).join('');
}
//console.log(getMissingNumber([2015, 8, 26]));


//5
// Create a function that takes an array of letters, and combines them into words in a sentence.
// The array will be formatted as so:

// [['J','L','L','M']
// ,['u','i','i','a']
// ,['s','v','f','n']
// ,['t','e','e','']]

// The function should combine all the 0th indexed letters to create the word 'just', all the 1st indexed letters to create the word 'live', etc.
// Shorter words will have an empty string in the place once the word has already been mapped out (see the last element in the last element in the array).
// Examples

// arrAdder([
//     ['J', 'L', 'L', 'M'],
//     ['u', 'i', 'i', 'a'],
//     ['s', 'v', 'f', 'n'],
//     ['t', 'e', 'e', '']
// ]) // => "Just Live Life Man"

let array = [
    ['J', 'L', 'L', 'M'],
    ['u', 'i', 'i', 'a'],
    ['s', 'v', 'f', 'n'],
    ['t', 'e', 'e', '']
]


// arrAdder([
//   [ 'T', 'M', 'i', 't', 'p', 'o', 't', 'c' ],
//   [ 'h', 'i', 's', 'h', 'o', 'f', 'h', 'e' ],
//   [ 'e', 't', '', 'e', 'w', '', 'e', 'l' ],
//   [ '', 'o', '', '', 'e', '', '', 'l' ],
//   [ '', 'c', '', '', 'r', '', '', '' ],
//   [ '', 'h', '', '', 'h', '', '', '' ],
//   [ '', 'o', '', '', 'o', '', '', '' ],
//   [ '', 'n', '', '', 'u', '', '', '' ],
//   [ '', 'd', '', '', 's', '', '', '' ],
//   [ '', 'r', '', '', 'e', '', '', '' ],
//   [ '', 'i', '', '', '', '', '', '' ],
//   [ '', 'a', '', '', '', '', '', '' ] ]) // => "The Mitochondria is the powerhouse of the cell"


let array2 = [
    ['T', 'M', 'i', 't', 'p', 'o', 't', 'c'],
    ['h', 'i', 's', 'h', 'o', 'f', 'h', 'e'],
    ['e', 't', '', 'e', 'w', '', 'e', 'l'],
    ['', 'o', '', '', 'e', '', '', 'l'],
    ['', 'c', '', '', 'r', '', '', ''],
    ['', 'h', '', '', 'h', '', '', ''],
    ['', 'o', '', '', 'o', '', '', ''],
    ['', 'n', '', '', 'u', '', '', ''],
    ['', 'd', '', '', 's', '', '', ''],
    ['', 'r', '', '', 'e', '', '', ''],
    ['', 'i', '', '', '', '', '', ''],
    ['', 'a', '', '', '', '', '', '']
]


let counter = 0;
function arrAdder(arr) {
    let str = '';
    return function func(counter) {
        if (arr[0].length > counter) {
            arr.forEach((elem) => {
                str += elem[counter];
            })
            str += ' ';
            return func(++counter);
        } else {
            return console.log(str);
        }
    }
}
//arrAdder(array2)(counter);

// 5.1 Create a function that accepts a string and return 2-dimensional array as above

function arrayMaker(str) {
    let arr = str.split(' ');
    let arr2 = [];
    arr.forEach((elem) => {
        arr2.push(elem.split(''))
    })
    return arr2;
}
//console.log(arrayMaker('The Mitochondria is the powerhouse of the cell '))

//6
// Find a digit in array that has no pair
// [1,2,3,3,1,4,4] ===> 2
// [2,1,1,2,3] ===> 3

function noPairDigit(arr) {
    let digitCounter = {};
    let noPairDigit = [];
    arr.forEach((elem) => {
        digitCounter[elem] = digitCounter[elem] === undefined ? 1 : digitCounter[elem] += 1;
    })
    noPairDigit = Object.entries(digitCounter);
    noPairDigit = noPairDigit.filter((elem) => {
        return elem[1] === 1;
    })

    console.log(noPairDigit[0][0]);
}
//noPairDigit([2, 1, 1, 2, 3]);

//7
// Create a function that accepts an array of classnames and returns an array of unique classnames;
// Result must be sorted by string frequency in the input array:

// example:
let classNames = ['hader', 'menu', 'menu-item', 'menu-item', 'menu-item', 'footer', 'menu', 'link', 'link', 'link', 'link', 'link']

// let result = ['link', 'menu-item', 'menu', 'header', 'footer']
// 'link' is at 0 index as it is the most frequent class
// 'footer' is at the last index as it's present only once

function unique(arr) {
    let obj = {};
    arr.forEach((elem) => {
        obj[elem] = obj[elem] === undefined ? 1 : obj[elem] += 1;
    })
    let newArr = Object.entries(obj).sort((a, b) => {
        return b[1] - a[1];
    })
    let result = [];
    newArr.forEach((elem) => {
        result.push(elem[0]);
    })
    console.log(result);
}
//unique(classNames);

