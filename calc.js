let a = ''; // первое число
let b = ''; // второе число
let sign = ''; //знак операции
let finish  = false;


const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
// массив для проверки, что нажато
const action = ['-', '+', 'X', '/'];

// экран 
const out = document.querySelector('.calc-screen p');

function clearAll () { //кнопка ac
    a = ''; // первое число и результат
    b = ''; // второе число
    sign = ''; // знак
    finish = false;
    out.textContent = 0;
}

document.querySelector('.ac').onclick = clearAll;
document.querySelector('.buttons').onclick = (event) => {
    // нажата не кнопка(ничего не нажато)
    if(!event.target.classList.contains('btn')) return;
    // нажата кнопка ac - ClearAll
    if(event.target.classList.contains('ac')) return;

    out.textContent = '';
    // получаем нажатую кнопку
    const key = event.target.textContent;

    if (digit.includes(key)) {
        if (b ==='' && sign === '') {
            a += key;
            
            out.textContent = a;
        }
        else if (a!=='' && b!=='' && finish) {
            b = key;
            finish = false;
            out.textContent = b;
        }
        else {
            b += key;
            out.textContent = b;
        }
        console.table(a, b , sign);
        return;
    }

     if (action.includes(key)) {
        sign = key;
        out.textContent = sign;
        console.table(a, b , sign);
        return;
    }

    // нажата =
    if (key === '=') {
        if (b ==='') b = a;
        switch (sign) {
            case "+":
                a = (+a) + (+b);
                break;
            case "-":
                a = a - b;
                break;
            case "X":
                a = a * b;
                break;
            case "/":
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
        console.table(a, b , sign);
    }

}