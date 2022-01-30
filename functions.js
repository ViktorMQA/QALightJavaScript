// Function

// Function declaration к такой функции можно обращаться где угодно даже до ее инициализации
function great(names){
    console.log('hello '+ names)
}
great('Viktor')

// Function expression к такой функции можно обращаться только после инициалезации
const great2 = function (names){
    console.log('hello 2 '+ names)
}
great2('Viktor')


// Анонимные функции. Как пример расмотрем setInterval который будет принимать анонимную функцию
let counter = 0
const interval = setInterval(function(){
    if (counter < 3){
    console.log(counter++)
}else {clearInterval(interval)}

}, 1000)


// Срелочные функции
// function great(names){
//     console.log('hello '+ names)
// }

const arrow = (nam) => {console.log('hello '+ nam)}
arrow('Andrey')

const arrow2 = nam2 => console.log('hello '+ nam2) // если принимаем один параметр можно не писать круглые скобки и если одна строка в фигурных можно не писпть фигурные
arrow2('Sergey')

// Параметры по умолчанию (мы можем задавать дефолтные значения принимаемых параметров на случай если их не предадут)
const sum = (a = 0, b = 1) => {return (a+b)}
console.log(sum())


const aa = function (a, b, c){
    const arr = [a, b, c]
    let res = 0
    for (i = 0; i<arr.length; i++){
        res = res + arr[i]
    }
    return res
}
console.log(aa(2, 10, 1100))



function sumAll2(...all){ // ...all позволяет принимать любое количество переменных 
let result = 0
for(let num of all){
    result += num
}
return result
}

console.log(sumAll2(1, 2, 3, 4, 5, 6))


// Замыкание (Из одной функции возвращаем другую функцию)

function twoInOne(firstName){
    return function second(lastName){
        console.log(firstName +' '+ lastName)
    }
}

const ttt = twoInOne('Viktor')
ttt('Muzyka')
