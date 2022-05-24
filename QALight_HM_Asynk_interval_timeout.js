//1. Функция startCounter(ms) - выводит числа от 0 до бесконечности, пока ее не прервет вызов ф-ции stopCounter
// Ф-ция stopCounter(counterId, ms) - прерыывает счетчик counterId через ms милисекунд

function startCounter(ms) {
    let counter = 0;
    let id = setInterval(() => {
        console.log(counter++)
    }, ms)
    return id;
}

function stopCounter(intervalId, ms) {
    setTimeout(() => {
        clearInterval(intervalId)
    }, ms)
}

// const intervalId = startCounter(1000);
// stopCounter(intervalId, 5000);

// const timerId = startCounter(500) ---> 0, ... 1, ... 2, ...3, ...
// stopCounter(timerId, 6) - останавливает счет



// 2. Перебирает массив arr указанное кол-во раз (n) с интервалом ms милисекунд
// function iterateMultipletimes(arr, n, ms = 500)  {
//   ...
// }

const arr = [1, 2, 3, 4, 5]

function iterateMultipletimes(arr, n, ms = 500) {
    let counter = 0
    const idInt = setInterval(() => {
        ++counter;
        if (counter > n) {
            clearInterval(idInt);
        } else {
            console.log("-----------")
            arr.forEach(elem => {
                console.log(elem)
            });
        }
    }, ms);
}

//iterateMultipletimes(arr, 5, 1000)


// 3. function iterateForwardBackward(arr, ms) {} - выводит элементы массива в прямом и обратном порядке с интервалом ms
// iterateForwardBackward(['a', 'b', 'c'], 500) ---> // 'a', ... 'b', ... 'c', ... 'c', ... 'b', ... 'a'

function iterateForwardBackward(arr, ms) {
    setTimeout(()=>{
        arr.reverse().forEach((elem, i) => {
            const id = setTimeout(() => { 
                console.log(elem);
            }, i * ms);
        });
    }, 5000)
    arr.forEach((elem, i) => {
        const id = setTimeout(() => { 
            console.log(elem);
        }, i * ms);
    });
    
}

//iterateForwardBackward(arr, 1000);

// 1.1 **
// startCounter - см. задачу 1
// написать функцию stop, которая будет останавливать счетчик следующим образом:
// const timer = startCounter(500)
// stop(timer).after(3, 'sec') --> остановка произойдет через 3 секунды. Второй аргумент может принимать значение 'ms'

// 3.1 **
// Написать ф-цию iterate(arr), которая будет перебирать массив, как в задаче 3, но вызываться будет следуюшим образом:
//iterate([1,2,3]).forward().backward().forward().backward()
// Интервал пусть будет задан 500ms
