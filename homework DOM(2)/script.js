const body = document.body

const mainDiv = document.createElement('div')
mainDiv.classList.add('main_div')
mainDiv.style.border = '1px solid hsl(4.21deg 89.06% 74.9%)'
mainDiv.style.width = '50%'
mainDiv.style.padding = '1rem'

body.prepend(mainDiv)


const div = document.createElement('div1')
div.classList.add('div1')
div.innerHTML = 'Name:'
mainDiv.prepend(div)

const input = document.createElement('input')
input.style.borderRadius = '5px'
input.style.border = 'none'
input.style.backgroundColor = '#ddd9d9'
input.placeholder = 'name'
input.style.display = 'block'
input.style.paddingRight = '8.5rem'
input.style.paddingLeft = '1rem'
input.style.paddingTop = '0.8rem'
input.style.paddingBottom = '0.8rem'
input.style.marginBottom = '0.5rem'
mainDiv.append(input)

//...перед объектом
//textElement.before(newElement);
//...после объекта
//textElement.after(newElement);
//...внутрь и в начало объекта
//textElement.prepend(newElement);
//...внутрь и в конец объекта
//textElement.append(newElement);


const div2 = document.createTextNode('Number:');
div.classList.add('newDiv')
mainDiv.append(div2)


// const input2 = document.createElement('input2')
// input.style.borderRadius = '5px'
// input.style.backgroundColor = '#D1CBC7'
// input.placeholder = 'name'
// input.style.display = 'block'
// mainDiv.append(input2)


const input2 = input.cloneNode(true); // клонировать сообщение
input2.placeholder = 'number'
div2.after(input2); // показать клонированный элемент после существующего div


const div3 = document.createTextNode('Email:');
div.classList.add('newDiv2')
mainDiv.append(div3)
//  const div3 = div2.cloneNode(true); // клонировать сообщение
//  div3.querySelector('strong').innerHTML = 'Email:' // изменить клонированный элемент
//   input2.after(div3); 


const input3 = input.cloneNode(true); // клонировать сообщение
input3.placeholder = 'email'
div3.after(input3); // показать клонированный элемент после существующего div

const div4 = document.createTextNode('Sum:');
div.classList.add('newDiv3')
mainDiv.append(div4)

const input4 = input.cloneNode(true); // клонировать сообщение
input4.placeholder = 'sum'
div4.after(input4); // показать клонированный элемент после существующего div

const btn = document.createElement('button')
btn.classList.add('button')
btn.innerHTML = 'Go  to the payment'
btn.style.width = '150px'
btn.style.height = '40px'
btn.style.backgroundColor ='hsl(4.21deg 89.06% 74.9%)'
btn.style.color = 'white'
btn.style.border = 'none'
mainDiv.append(btn)



