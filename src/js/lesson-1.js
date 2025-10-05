
// Запропонуйте користувачу ввести число за допомогою prompt().
// Збережіть введене значення у змінну number.
// Перевірте, чи дорівнює змінна number числу 10:
//    Якщо так - виведіть повідомлення 'Вірно' у alert().
//    Якщо ні - виведіть 'Невірно'. 

// Підказка: prompt завжди повертає рядок (String), тому перед перевіркою  
// перетворіть значення на число за допомогою Number().


const checkTen = string => {
    let number = Number(string);
    if (number === 10) {
        alert("Вірно")
    } else {
        alert("Не вірно")
    };
}

checkTen(prompt('Будь ласка, введіть 10'));


// У змінній min лежить випадкове число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число (у першу, другу, третю чи четверту).
// Виведіть в alert відповідне повідомлення, наприклад:
// "10 входить в першу чверть"

// const min = Math.floor(Math.random() * (59 - 0) + 0);

let min = Math.floor(Math.random() * 60);

const checkHour = number => {
    switch(true) {
        case (number >= 0 && number  < 15):     alert(`${number} входить в першу чверть`);
        break;
        case (number >= 15 && number  < 30): alert(`${number} входить в другу чверть`);
        break;
        case (number >= 30 && number  < 45): alert(`${number} входить в третю чверть`);
        break;
        case (number >= 45 && number  < 60): alert(`${number} входить в четверту чверть`);
        break;
        default: alert('Помилка')
    }
}

checkHour(min);


// Змінна num може набувати 4 значення: '1', '2', '3' або '4' 
// (запитуй це значення у користувача через prompt). 
// Якщо вона має значення '1', то у змінну result запишіть 'зима',
// якщо має значення '2' - 'весна' і так далі.
// Розв'яжіть завдання через switch-case.
// Не забудьте про дефолтне значення, на випадок, якщо користувач 
// введе в prompt щось інше. В такому випадку result має набувати значення:
// "Вибачте, але ви маєте ввести значення від 1 до 4 включно".
// Значення змінної result виведіть в консоль.

const checkFour = number => {
    let result;
    switch(number) {
        case 1: result = "Зима";
            break;
        case 2: result = "Весна";
            break;
        case 3: result = "Літо";
            break;
        case 4: result = "Осінь";
            break;
        default: console.log("Вибачте, але ви маєте ввести значення від 1 до 4 включно");
    }

        if (result) {       
            console.log(result);
        }
}

checkFour(Number(prompt('Будь ласка, введіть число від 1 до 4, результат буде у консолі')));

// Отримуйте від користувача число (кількість хвилин) через prompt
// і виводьте у консоль рядок у форматі годин та хвилин.
// Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
// Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'): 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples

const timeFun = num => {
    let hours = Math.floor(num / 60);
    let minutes = num % 60;
    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");

    return `${hours}:${minutes}`;
}

console.log(timeFun(Number(prompt('Будь ласка, введіть хвилини'))));

// Напишіть код, який запитуватиме у користувача
// логін за допомогою prompt і виводить результат в консоль браузера
// Після цього додайте перевірку введеного користувачем значення:
// Якщо відвідувач вводить "Адмін",
// то prompt запитує пароль (не забудьте зберігти його у змінну для подальшої перевірки).
// Якщо нічого не ввели або натиснули Cancel,
// Вивести в alert строку "Скасовано"
// В іншому випадку вивести в alert рядок "Я вас не знаю"
// Пароль перевіряти так:
// Якщо введено пароль "Я головний",
// то вивести в alert рядок "Добрий день!",
// в іншому випадку вивести в alert рядок "Невірний пароль!"


const checkLogin = login => {
    console.log(login);
    if (login === "Адмін") {
        let password = prompt("Password");
        
        if (password === "Я головний") {
        alert("Добрий день!");
        return;
        } else if (password === "") {
            alert("Скасовано");
            return;
        }; 

        alert("Невірний пароль!");
        alert("Я вас не знаю");
    }
}

checkLogin(prompt('Будь ласка, введіть Ващ логін'));



// Використайте цикл while, щоб вивести в console всі числа від 0 до 20 включно.

const loop20 = () => {
    let i = 0;
    while(i <= 20) {
        console.log(i);
        i++;
        
    }
}

loop20();


// Напишіть функцію getNumbers(min, max), що приймає 2 параметри - 
// мінімальне і максимальне число відповідно.
// Напишіть цикл всередині функції, який виводить у консоль
// всі числа від max до min за спаданням.
// Окрім цього, підрахуйте суму всіх парних чисел в цьому циклі
// і поверніть її з функції.

const getNumbers = (min, max) => {
    let result = 0;
    for (let i = max; i >= min; i--) {
        console.log(i);
        if (i % 2 === 0) {
            result += i;
        }
    }
    return result;
}
console.log(getNumbers(1,100));

// Напишіть функцію min(a, b), яка приймає 2 числа і повертає меньше з них.
// Потрібно додати перевірку, що функція отримує саме числа, в іншому випадку
// повертати з функції рядок - 'Not a number!'.

const minNumber = (a,b) => {
    if (typeof a !== "number" || typeof b !== "number") {
        return "Not a number!";
    }
    return a>b?b:a;
}

console.log(minNumber(10,5));

// Напишіть функцію isAdult(age), яка  приймає число - вік користувача і повертає true, 
// якщо параметр age більше чи дорівнює 18.
// В іншому випадку вона запитує підтвердження через confirm 
// і повертає його результат (true/false).

const isAdult = age => {
    return age >= 18?true:false || confirm("Будь ласка,підтвердіть, що Вам немає 18");
}

console.log(isAdult(18));

// Напишіть функцію fizzBuzz(num), яка приймає число і перевіряє кожне число від 1 до num:
// Якщо число ділитися  без остачі на 3 - виводить в консоль 'fizz',
// якщо ділиться  без остачі на 5 - виводить в консоль 'buzz',
// якщо ділиться  без остачі і на 3, і на 5 - виводить в консоль 'fizzbuzz'.

const fizzBuzz = num => {
    for (let i = 1; i < num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("fizzbuzz");
        }  else if (i % 3 === 0) {
            console.log("fizz");
        }  else if (i % 5 === 0) {
            console.log("buzz");
        } 
    }
}

fizzBuzz(20);