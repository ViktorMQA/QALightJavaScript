const selector = 'h2'
const outlineStyle = '2px solid red'


// 1. Выбрать все заголовки <h2>  --> 4
// h2
// 2. Все параграфы <p> в ПЕРВОМ <div> --> 3
// div:first-of-type > p
// 3. Все <div>, кроме id=counter --> 4
//div:not(#counter)
// 4. 3й и 4й элементы списка <li>--> 2
// 'li:nth-child(3), li:nth-child(4)'
// 5. Все отмеченные чекбоксы --> 2
// input:checked
// 6* Второй отмеченный чекбокс --> 1
// li:nth-child(2) > input:checked
// 7* Второй неотмеченны чекбокс --> 1
// li:nth-child(4) > input
// 8 Ссылки на Twitter и Instagram --> 2
// [href="https://twitter.com"], [href="https://www.instagram.com"]
// 9 Курсив в сыылке на Facebook (слово facebook) --> 1
// a > em
// 10 Все курсивы --> 5
// em
// 11 Label у поля ввода name (привязать к полю name) --> 1
// input[name="name"] + label
// 12 Курсив <em>, чей родитель <h2> --> 1 !!
// h2 > em
// 13 Четные элементы списка --> 2
// li:nth-child(2n)
// 14 Нечетные элементы списка --> 3
// li:nth-child(2n+1)
// 15 Обязательные инпуты --> 3
// input:required
// 16 Обязательные, но неотмеченные чексбокс --> 1
// input:required:not(input:checked)
// 17 Последний параграф <p> во втором <div> --> 1
// div:nth-of-type(3) > p:last-child
// 18 Элементы, у которых есть и id, и class атрибуты (не по значению, а по наличию атрибутов) --> 2
// [id][class]
// 19 Элемент с id и атрибутом class="counter" --> 1 
// [id].counter
// 20 Элементы с data-qa атрибутом
// [data-qa]



const enableOutline = (selector) => {
  if (!selector || selector.length === 0) {
    return
  }
  try {
    const elements = document.querySelectorAll(`${selector}`)
    const counter = document.getElementById('counter')
    elements.forEach(elem => {
      elem.style.outline = outlineStyle;
    })
    
    counter.innerHTML = elements.length
    
  } catch (e) {
  	console.error(e.message)
    counter.innerHTML = e.message;
    counter.style.fontSize = '16px'
    counter.style.color = 'red'
  }
}

enableOutline(selector)