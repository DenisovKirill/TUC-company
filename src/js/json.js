'use strict';

const person = {
    name: 'Alex',
    tel: '+744444444',
    parents: {
        mom: 'Olga',
        dad: 'Mike'
    }
};

console.log(JSON.stringify(person)); //Позволяет переводить в вид, понятный серверу.

// JSON.parse(person); Метод для получения данных с сервера.

const clone = JSON.parse(JSON.stringify(person));
//Создаем ГЛУБИННЫЙ клон объекта.