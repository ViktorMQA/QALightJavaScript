// Event Loop


const timeout = setTimeout(() => {                   // задаем таймаут для вызова коллбек функции
    console.log('hello everybody!')
}, 2000)

clearTimeout(timeout) // очищает таймаут 



const inrevalt = setInterval(() => {                   // задаем интервал для вызова коллбек функции
    console.log('hello everybody!')
}, 2000)

clearInterval(inrevalt) // очищает интервал




