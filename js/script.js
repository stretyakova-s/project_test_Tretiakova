"use strict";
//a = 15;
//console.log(a);

/*let number = 5; //объявление переменных и вывод в консоль
const leftBorderwidth = 1;
number = 10
console.log(number);

const obj = {  //объекты и массивы
    a: 50
};

obj.a = 10;
console.log(obj)*/
//console.log(something);
//let und;
//console.log(und);

/*const obj = {
    name: "Sonya",
    age: 25,
    isMarried: false
};

console.log(obj.name);*/

//let arr = ['plum.png', 'orange.jpeg', 6, 'apple.bmp', {}, []]
//console.log(arr[2]);


//alert('Hello');
//const result = confirm ("Are you here?");
//console.log(result);

//const answer = prompt("Вам есть 18?", "18");
//console.log(answer);

/*const answers = [];
answers[0] = prompt ('Как ваше имя?', ''); //общение с пользователем
answers[1] = prompt ('Как ваша фамилия?', '');
answers[2] = prompt ('Сколько вам лет?', '');
document.write(answers);*/

/*const category = 'toys'; //интерполяция
console.log(`https://someurl.com/${category}/5`);

const user = "Ivan"; 
alert(`Привет, ${user}`);*/

//console.log('arr' + "-object");
//console.log (4 + +"5");

//let incr = 10;
//decr = 10;

//++incr; 
//--decr;

//console.log(++incr); -- работа инкремента и декремента
//console.log(--decr);

//console.log(5%2); --остаток от деления

//console.log(2*4 == '8'); -- true, сравниваем по значению, а не по типу данных
//console.log(2*4 === '8'); -- строгое сравнение, сравниваются и типы данных тоже

/*const isChecked = true;
        isClose = false;
//console.log(isChecked && isClose);
console.log(!isChecked || isClose); -- и/или */

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');
const personalMovieDB = 
{
count: numberOfFilms, 
movies:{},
actors:{},
genres:[], 
private: false
};
const question_1 = prompt('Один из последних просмотренных фильмов?');
const question_2 = prompt('На сколько его оцените?');
const question_3 = prompt('Один из последних просмотренных фильмов?');
const question_4 = prompt('На сколько его оцените?');
personalMovieDB.movies[question_1] = question_2;
personalMovieDB.movies[question_3] = question_4;

console.log(personalMovieDB);