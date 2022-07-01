let a = ''; //first number
let b = ''; //second number
let sign = ''; // знак операции
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', 'x', '/'];

// экран калькулятора
const out = document.querySelector('.calc__screen p');
function clearAll() {
   a = '';
   b = '';
   sign = '';
   finish = false;
   out.textContent = 0;
}

document.querySelector('.ac').onclick = clearAll;

document.querySelector('.calc__buttons').onclick = (event) => {
   // нажата не кнопка
   if (!event.target.classList.contains('calc__btn')) return;
   // нажата кнопка ac (ClearAll)
   if (event.target.classList.contains('ac')) return;

   out.textContent = '';

   //получаю нажатую нкопку
   const key = event.target.textContent;

   //если нажата кнопка 0-9 или .
   if (digit.includes(key)) {
      if (b === '' && sign === '') {
         a += key;
         console.log(a, b, sign);
         out.textContent = a;
      }
      else if (a !== '' && b !== '' && finish) {
         b = key;
         finish = false;
         out.textContent = b;
      }
      else {
         b += key;
         out.textContent = b;
      }
      console.log(a, b, sign);
      return;
   }

   //если нажат математический знак
   if (action.includes(key)) {
      sign = key;
      out.textContent = sign;
      console.log(a, b, sign);
      return;
   }

   // нажимаем кнопку равно
   if (key === '=') {
      if (b === '') b = a;
      switch (sign) {

         case '+':
            a = (+a) + (+b);
            break;
         case '-':
            a = a - b;
            break;
         case 'x':
            a = a * b;
            break;
         case '/':
            if (b === '0') {
               out.textContent = 'Ошибка';
               a = '';
               b = '';
               sign = '';
               return;
            }
            a = a / b;
            break;
      }
      finish = true;
      out.textContent = a;
      console.log(a, b, sign);
   }
}

