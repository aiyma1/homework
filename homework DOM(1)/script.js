const body = document.body

const div = document.createElement('div1')
div.classList.add('div1')
div.innerHTML = 'Фамилия Имя:'
body.prepend(div)

const input = document.createElement('input')
input.style.display = 'block'
input.style.marginBottom = '0.5rem'
input.style.paddingRight = '5rem'
input.style.paddingLeft = '0.5rem'
input.style.paddingTop = '0.4rem'
input.style.paddingBottom = '0.6rem'
body.append(input)

const div2 = document.createTextNode('Введите номер заказа:');
div.classList.add('newDiv')
body.append(div2)

const input2 = input.cloneNode(true); // клонировать сообщение
input2.placeholder = 'Оставьте сообщение здесь'
div2.after(input2); // показать клонированный элемент после существующего div

const div3 = document.createTextNode('Телефон:');
div.classList.add('newDiv2')
body.append(div3)

const input3 = input.cloneNode(true); // клонировать сообщение
div3.after(input3); // показать клонированный элемент после существующего div


const div4 = document.createTextNode('Электронный адрес:');
div.classList.add('newDiv3')
body.append(div4)

const input4 = input.cloneNode(true); // клонировать сообщение
input4.placeholder = 'test@example.com'
div4.after(input4); // показать клонированный элемент после существующего div

const div5 = document.createTextNode('Ваедите сумму оплаты:');
div.classList.add('newDiv4')
body.append(div5)

const input5 = input.cloneNode(true); // клонировать сообщение
div5.after(input5); // показать клонированный элемент после существующего div

const btn = document.createElement('button')
btn.classList.add('button')
btn.innerHTML = 'Перейти к оплате'
btn.style.width = '150px'
btn.style.height = '40px'
btn.style.backgroundColor ='hsl(4.21deg 89.06% 74.9%)'
btn.style.color = 'white'
btn.style.border = 'none'
body.append(btn)

