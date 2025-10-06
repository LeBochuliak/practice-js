// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить 
// квадрати кожного елементу вхідного масиву. 
// Очікуваний результат: [1, 4, 9, 16, 25].

const numbers = [1, 2, 3, 4, 5]

const squareArray = array => array.map(el => el ** 2);

console.log(squareArray(numbers));


// Дано масив об'єктів. Створіть новий масив, що містить всі значення 
// з масивів values кожного об'єкту, збережених в одному масиві. 
// Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

const data = [
 { id: 1, values: [1, 2, 3] },
 { id: 2, values: [4, 5, 6] },
 { id: 3, values: [7, 8, 9] },
];

const concatArray = array => array.flatMap(el => el.values);

console.log(concatArray(data));

// Дано масив об'єктів. 
// Перевірте, чи є хоча б один об'єкт з віком менше 20 років. 
// Очікуваний результат: true.

const people = [
 { name: 'John', age: 27 },
 { name: 'Jane', age: 31 },
 { name: 'Bob', age: 19 },
];

const hasUnder18 = array => array.some(el => el.age < 18);

console.log(hasUnder18(people));


// Дано масив чисел [2, 4, 6, 8, 10]. 
// Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

const numbersSecond = [2, 4, 6, 8, 10];

const evenNumbers = array => array.every(el => el % 2 === 0);

console.log(evenNumbers(numbersSecond));


// Знайдіть перше непарне число

const numbersThird = [2, 1, 6, 8, 9, 10, 12];

const oddNumber = array => array.find(el => el % 2 !== 0);

console.log(oddNumber(numbersThird));


// Відсортуйте масив чисел [4, 2, 5, 1, 3] 
// у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

const numbersArray = [4, 2, 5, 1, 3];

const sortedFoo = array => array.toSorted((a, b) => a - b);

console.log(sortedFoo(numbersArray));


// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"]
//  у порядку алфавіту. 
// Очікуваний результат: ["apple", "banana", "orange", "pear"].

const stringArray = ['banana', 'orange', 'apple', 'pear'];

const sortedStringFoo = array => array.toSorted((a, b) => a.localeCompare(b));

console.log(sortedStringFoo(stringArray));


//  Відсортуйте масив об'єктів за віком у порядку зростання. 
// Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

const users = [
 { name: 'John', age: 27 },
 { name: 'Jane', age: 31 },
 { name: 'Bob', age: 19 },
];

const sortedObjFoo = array => array.toSorted((a, b) => a.age - b.age);

console.log(sortedObjFoo(users));

// Дано масив об'єктів. 
// Створіть новий масив, що містить тільки об'єкти, в яких 
// вік більше 20 років. 
// Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

const adultArray = array => array.filter(el => el.age > 20);

console.log(adultArray(users));



// Дано масив чисел [1, 2, 3, 4, 5]. 
// Застосуйте метод для обчислення суми елементів масиву.

const numbersForth = [1, 2, 3, 4, 5];

const sumFoo = array => array.reduce((el, acc) => acc += el, 0);

console.log(sumFoo(numbersForth));


 // Розроби клас Calculator, який дозволяє виконувати арифметичні 
 //  операції над числом за допомогою методів класу, підтримуючи  
 // ланцюжковий виклик (method chaining).
 //
 // Вимоги до класу Calculator
 // - Метод number(value)
 // Встановлює початкове значення для наступних обчислень.
 // Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
 
 // - метод getResult, Повертає поточний результат усіх операцій.
 // Не змінює значення, просто повертає його.
 
 // - метод add - Додає value до поточного значення.
 // Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
 
 // - метод substruct - Віднімає value від поточного значення. Повертає this.
 
// - метод divide - Ділить поточне значення на value, якщо value не дорівнює 0.
// Якщо value === 0, викидає помилку з повідомленням про неможливість ділення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
 
 // - метод multiply -Множить поточне значення на value. Повертає this.
 
 // Об'єкт класу може проводити послідовні операції у вигляді ланцюжка
 
 // Приклад використання:

class Calculator {
    constructor(value){
        this.value = value;
    }

    number(value) {
        this.value = value;
        return this;
    }
    getResult() {
        return this.value;
    }
    add(value) {
        this.value += value;
        return this;
    }
    subtract(value) {
        this.value -= value;
        return this;
    }
    divide(value) {
        if (value === 0) {throw new Error('На 0 ділити не можна!')}
        this.value /= value;
        return this;
    }
    multiply(value) {
        this.value *= value;
        return this;
    }

} 

const calc = new Calculator();

const result = calc
   .number(10)   // Встановлюємо початкове значення 10
   .add(5)       // Додаємо 5 (10 + 5 = 15)
   .subtract(3)  // Віднімаємо 3 (15 - 3 = 12)
   .multiply(4)  // Множимо на 4 (12 * 4 = 48)
   .divide(2)    // Ділимо на 2 (48 / 2 = 24)
   .getResult(); // Отримуємо результат: 24


   console.log(result); // 24




// Завдання 12:
 // Напиши клас Client який створює об'єкт з властивостями login email.
 // Оголоси приватні властивості #login #email, доступ до яких зроби 
 // через геттер та сеттер login email

class Client {
    #login;
    #email;

    constructor(login, email) {
        this.#login = login;
        this.#email = email;
    }
    get login() {
    return this.#login;
    }

    set login(newLogin) {
    this.#login = newLogin;
    return this.#login;
    }
    

    get email() {
        return this.#email;
    }

    set email(newEmail) {
        this.#email = newEmail;
        return this.#email;
    }
};

   //  Наслідування у класах!
  // Cтворіть клас `Person`, який містить наступні властивості:
  //  - `name` - ім'я людини;
  //  - `age`- вік людини;
  //  - `gender` - стать людини;
  //  - `email`- електронна пошта людини.
  
  // Крім того, клас `Person` має мати метод `getDetails()`,
  // який повертає об'єкт з ім'ям, віком, статтю 
  //та електронною поштою людини.
  
  class Person extends Client {
        constructor(login, email, name, age, gender) {
            super(login, email);
            this.name = name;
            this.age = age;
            this.gender = gender;
        }

        getDetails() {
            return {name: this.name, age: this.age, gender: this.gender, email: this.email, login: this.login};
        }
  };
  // 
  // Потім Створіть клас `Employee`, який розширює клас `Person` і містить наступні властивості:
  //  - salary - зарплата співробітника;
  //  - department - відділ, в якому працює співробітник.
  // Крім того, клас `Employee` має мати метод `getEmployeeDetails()`, який повертає об'єкт з зарплатою співробітника та відділом, в якому він працює.

class Employee extends Person {
    constructor(login, email, name, age, gender, salary, department) {
        super(login, email, name, age, gender);
        this.salary = salary;
        this.department = department;
    }
    getEmployeeDetails() {
        return {...this.getDetails(), salary: this.salary, department: this.department};
    }
};

const emp = new Employee("user123", "user@mail.com", "Anna", 28, "female", 5000, "Design");

console.log(emp.getEmployeeDetails());

