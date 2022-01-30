// 1 Найти минимальное число из трех
function findSmallestOfThree() {
    const first = +prompt("Enter first number")
    const second = +prompt("Enter second number")
    const third = +prompt("Enter third number")

    let minNum = null
    if (first < second && first < third) {
        minNum = first
    } else if (second < first && second < third) {
        minNum = second
    } else {
        minNum = third
    }
    console.log(`Your min number is: ${minNum}`)
}
//findSmallestOfThree()


// 2 Найти среднее из трех чисел
function findMiddleOfThree() {
    const first = +prompt("Enter first number")
    const second = +prompt("Enter second number")
    const third = +prompt("Enter third number")

    let avgNum = null
    if ((first > second && first < third) || (first > third && first < second)) {
        avgNum = first
    } else if ((third > first && third < second) || (third > second && third < first)) {
        avgNum = third
    } else {
        avgNum = second
    }
    console.log(`Your average number is: ${avgNum}`)
}
//findMiddleOfThree()

// 3 Поменять местами значения переменных: допустим, let box1 = 'red ball'; let box2 = 'green ball'.
// Возможно, придется использовать какую-нибудь третью (вспомогательную) коробку? :)
// Вывести в консоль занчения переменных
function swapItems() {
    let box1 = 'red ball'
    let box2 = 'green ball'
    let box3

    console.log(`box1 value is ${box1} and box2 value is ${box2}`)

    box3 = box1
    box1 = box2
    box2 = box3

    console.log(`box1 value is ${box1} and box2 value is ${box2}`)
}
//swapItems()


// 4 Вывести на консоль 3 числа в порядке возрастания через пробел `${a} ${b} ${c}` // let str= '' // str+ a + ' '
function sortNumbers() {
    const first = +prompt("Enter first number")
    const second = +prompt("Enter second number")
    const third = +prompt("Enter third number")

    let min = null
    let avg = null
    let max = null

    if (first < second && first < third) {
        min = first
    } else if (second < first && second < third) {
        min = second
    } else {
        min = third
    }
    if (first > second && first > third) {
        max = first
    } else if (second > first && second > third) {
        max = second
    } else {
        max = third
    }
    if ((first > second && first < third) || (first > third && first < second)) {
        avg = first
    } else if ((third > first && third < second) || (third > second && third < first)) {
        avg = third
    } else {
        avg = second
    }
    console.log(`Numbers from min to max: ${min} ${avg} ${max}`)
}
//sortNumbers()


// 5 Для чисел от 15 до 34 (включительно) вывести надпись: "Number <i> is even", если оно четное. Для нечетных вывести "Number <i> is odd"
function isOddOrEven() {
    for (let i = 15; i <= 34; i++) {
        if (i % 2 === 0) {
            console.log(`Number ${i} is even`)
        } else {
            console.log(`Number ${i} is odd`)
        }
    }
}
//isOddOrEven()

// 6 Для чисел от 1 до 30 (включительно) вывести: 
//   "fizz", если число делится на 3; 
//   "buzz", если делится на 5; 
//   "fizzbuzz", если делится и на 3, и на 5;
//   во всех остальных случаях вывести само число
function fizzbuzz() {
    for (let i = 1; i <= 30; i++) {
        if (i % 3 === 0) {
            console.log(`${i} - fizz`)
        } else if (i % 5 === 0) {
            console.log(`${i} - buzz`)
        }
        else if (i % 5 === 0 && i % 3 === 0) {
            console.log(`${i} - fizzbuzz`)
        } else {
            console.log(String(i))
        }
    }
}
//fizzbuzz()

// 7 Вывести сумму всех чисел до 17, кратных 4 // ==> 4 + 8 + 12 + 16 === 40
function sumOfNums() {
    let sum = 0
    for (let i = 4; i <= 17; i += 4) {
        sum += i
    }
    console.log(`sum all numbers is ${sum}`)
}
//sumOfNums()

// 8 Вывести среднее арифметическое всех чисел до 17, кратных 4 // => (4 + 8 + 12 + 16) / 4 === 10
function avgOfNums() {
    let sum = 0
    let counter = 0
    let avg = 0
    for (let i = 4; i <= 17; i += 4) {
        counter++
        sum += i
        avg = sum / counter
    }
    console.log(`average all numbers is ${avg}`)
}
//avgOfNums()

// 9* Еще один треугольник
function drawTriange2() {
    for (i = 5; i >= 0; i--) {
        let str = ""
        for (j = 0; j <= 5; j++) {
            if (i <= j) {
                str += " "
            } else {
                str += "#"
            }
        }
        console.log(str)
    }
}
//drawTriange2()

// #####
// ####
// ###
// ##
// #

// 10* И еще...
function drawTriange3() {
    for (i = 5; i > 0; i--) {
        let str = ""
        for (j = 0; j <= 5; j++) {
            if (i <= j) {
                str += "#"
            } else {
                str += " "
            }
        }
        console.log(str)
    }
}
//drawTriange3()
//     #
//    ##
//   ###
//  ####
// #####

// 11* Последний :)
function drawTriange4() {
    for (i = 0; i <= 5; i++) {
        let str = ""
        for (j = 0; j <= 5; j++) {
            if (i < j) {
                str += "#"
            } else {
                str += " "
            }
        }
        console.log(str)
    }
}
//drawTriange4()
// #####
//  ####
//   ###
//    ##
//     #



// 12* Одной строкой через запятую вывести все ПРОСТЫЕ числа  до 50  ==>  2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47
function printPrimeNumbers() {
    let n = 50

    nextPrime:
    for (let i = 2; i <= n; i++) { 
      for (let j = 2; j < i; j++) { 
        if (i % j == 0) continue nextPrime; 
      }

      console.log( i )
    }
}
//printPrimeNumbers()

// 13* Найти сумму всех простых чисел до 20 ==>  2 + 3 + 5 + 7 + 11 + 13 + 17 + 19 = 77
function sumPrimeNumbers() { 
    let n = 20
    let sum = 0

    nextPrime:
    for (let i = 2; i <= n; i++) { 
      for (let j = 2; j < i; j++) { 
        if (i % j == 0) continue nextPrime; 
      }
      sum += i
    }
    console.log(sum)
}
//sumPrimeNumbers()

// 14* Найти среднее арифметическое всех простых чисел до 20 ==> 9.625
function avgPrimeNumbers() { 
    let n = 20
    let sum = 0
    let count = 0

    nextPrime:
    for (let i = 2; i <= n; i++) { 
      for (let j = 2; j < i; j++) { 
        if (i % j == 0) continue nextPrime
      }
      count++
      sum += i
    }
    console.log(sum/count)

}
//avgPrimeNumbers()