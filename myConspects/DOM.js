// DOM

const element = document.getElementById('123')
// const element2 = document.querySelector('h1')
// const element2 = document.querySelector('#123')
// const element2 = document.querySelector('h1.test')
// const element2 = document.getElementsByClassName()
// const element2 = document.getElementsByClassName()
// const element2 = document.getElementsByName()
const element3 = document.querySelector('h2')


function newPar(node){
    node.textContent = 'New text content'
    node.style.color = 'red'
    node.style.textAlign = 'center'
    node.style.backgroundColor = 'yellow'
    node.style.padding = '2rem'
}

const a = prompt('делаем изменения? 1 or 2')

newF(a)

function newF(x){
    if(x === '2'){console.log('Ostavlyaem')}
    else if(x === '1'){setTimeout(()=>{
        newPar(element)
    }, 2000)}
}

// если нужно добавить событие - елемент точка on событие

element.onclick = function(){
    console.log('nash click')
    element.style.color = 'blue'
}

// вариант 2 addEventListener - два параметра 1-й строка название события второй функция

element3.addEventListener('dblclick', () => {
    console.log('dubl click')
    element3.style.color = 'red'
    element3.style.textAlign = 'center'

})
