// 1 - отримай body елемент і виведи його в консоль;
// 2 - отримай елемент id="title" і виведи його в консоль;
// 3 - отримай елемент class="list" і виведи його в консоль;
// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;
// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;
// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"
// 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку
// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
// 20 - очисти список


const bodyEl = document.querySelector('body');
console.log(bodyEl);

const titleEl = document.getElementById('title');
console.log(titleEl);

const listEl = document.querySelector('.list');
console.log(listEl);

const topicEls = document.querySelectorAll('[data-topic]');
console.log(topicEls);

const topicElFirst = topicEls[0];
console.log(topicElFirst);

const topicElLast = topicEls[topicEls.length - 1];
console.log(topicElLast);

const nextTitleEl = titleEl.nextElementSibling;
console.log(nextTitleEl);

const subtitleEls = document.querySelectorAll('h3');

subtitleEls.forEach(el => {
    console.log(el.textContent);
    el.classList.add('active');
});

const navLi = document.querySelector('[data-topic = "navigation"]');
console.log(navLi);

navLi.style.backgroundColor = 'yellow';
navLi.querySelector('p').textContent = "Я змінив тут текст!";

const currentTopic = "manipulation";
const currentTopicEl = document.querySelector(`[data-topic = ${currentTopic}]`);
console.log(currentTopicEl);

currentTopicEl.style.backgroundColor = 'lightblue';

const completedEl = document.querySelector('.completed');
console.log(completedEl);

completedEl.remove();

const newParagraf = document.createElement('p');
newParagraf.textContent = "Об'єктна модель документа (Document Object Model)";
titleEl.insertAdjacentElement('afterend', newParagraf);

const newLiEl = document.createElement('li');
const newLiTitle = document.createElement('h3');
newLiTitle.textContent = 'Властивість innerHTML';
const newLiParagraf = document.createElement('p');
newLiParagraf.textContent = 'Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу';

newLiEl.append(newLiTitle, newLiParagraf);
console.log(newLiEl);

listEl.appendChild(newLiEl);

const newLiMarkup = `<li><h3>Властивість innerHTML</h3><p>Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу</p></li>`;

listEl.insertAdjacentHTML('beforeend', newLiMarkup);

listEl.innerHTML = '';


// Створіть контейнер div (з класом number-container) в HTML-документі 
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer). 
// Парні числа повинні мати зелений фон (додати клас even), 
// Непарні числа - жовтий фон (додати клас odd).

const randomNumber = () => Math.floor(Math.random() * 100) + 1;

const containerEl = document.createElement('div');
containerEl.classList.add('number-container');

let i = 0;

while (i <= 100) {
    const box = document.createElement('div');
    box.classList.add('number')
    const number = randomNumber();
    box.textContent = `${number}`;
    if (number % 2 === 0) {
        box.classList.add('even');
    } else {
        box.classList.add('odd');
    }
    containerEl.append(box);
    i += 1;
};

document.querySelector('.container').append(containerEl);


// Form Events, Input, Focus, Blur and Submit.

// Використовуй шаблон форми з файлу html.

// 1 - При події `input`, якщо користувач ввів в поле більше 
// 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// то клас `error`

// 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`

// 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`, 
// якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`

// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// Дістань данні з інпуту і чек боксу, зроби перевірку, 
// що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName)
// у обьект і виведи у консоль. У разі, якщо користувач не виконав
// одну із умов, виведи повідомлення. Також при події інпут реалізуй додавання 
// ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видалив, зроби так,
// щоб на місце повернулось дефолтне знаяення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення 
// false, верни дефолтне значення "Anonymous" у span.

const formEl = document.querySelector('.js-contact-form');
const inputEl = document.querySelector('.js-username-input');
const checkboxEl = document.querySelector('.js-policy-checkbox');
const spanEl = document.querySelector('.js-username-output');

inputEl.addEventListener('input', () => {
    if (inputEl.value.length > '6') {
        inputEl.classList.remove('error')
        inputEl.classList.add('success');
    } else {
        inputEl.classList.add('error');
    }
    if (inputEl.value.trim() !== '') {
        spanEl.textContent = inputEl.value.trim();
    } else { 
        spanEl.textContent = 'Anonymous';
    }    
});

inputEl.addEventListener('focus', () => {
    if (inputEl.value.trim() === '') {
        inputEl.style.outline = '3px solid red';
    } else {
        inputEl.style.outline = '3px solid green';
    };
});

inputEl.addEventListener('blur', () => {
    if (inputEl.value.trim() === '') {
        inputEl.style.outline = '3px solid red';
    } else {
        inputEl.style.outline = '3px solid lime';
    };
});

formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    if (inputEl.value.trim() !== '' && checkboxEl.checked === true) {
        const userName = {
            name: inputEl.value.trim()
        };
        console.log(userName);
    } else { 
        alert('Будь ласка, введіть Ваше ім*я і підтвердіть політику конфіденційності');
    } 
    inputEl.value = '';
    checkboxEl.checked = false;
    spanEl.textContent = 'Anonymous';
});


// Використовуй шаблон розмітки з файлу html та напиши наступний функціонал:
// При кліку на кнопку "Зменшити" квадрат стає меньшим на 20 пікселів,
// При кліку на кнопку "Збільшити" - квадрат стає більшим на 20 пікселів.


const boxEl = document.querySelector('.box');
const decreaseBtn = document.querySelector('.js-decrease');
const increaseBtn = document.querySelector('.js-increase');


decreaseBtn.addEventListener('click', () => {
    let currentBoxWidth = boxEl.offsetWidth;
    let currentBoxHeight = boxEl.offsetHeight;
    boxEl.style.width = `${currentBoxWidth - 20}px`;
    boxEl.style.height = `${currentBoxHeight - 20}px`;
    
});
increaseBtn.addEventListener('click', () => {
    let currentBoxWidth = boxEl.offsetWidth;
    let currentBoxHeight = boxEl.offsetHeight;
    boxEl.style.width = `${currentBoxWidth + 20}px`;
    boxEl.style.height = `${currentBoxHeight + 20}px`;
})