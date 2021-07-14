"use strict"; /*активация строгого режима*/

// let userName=25+" "+"Маша";
// console.log(typeof userName);/*определение и вывод типа данных*/
// console.log(userName);

// let message = "Привет всем!";
// let first = 5;
// let two = 4;
// if (first===two) {console.log(message);
// }
// else {
//     console.log("Пока!");
// }

// let massage = "Мир прекрасен!";
// let number = 51;
// if(number>50) {
//     console.log("5 больше 50");
// }
// else if (number>30) {
//     console.log("5 больше 30");
// }
// else if (number>1) {
//     console.log("5 больше 1");
// }
// else {
//     console.log("Условие не выполнено");}

/*замена на условный оператор "?"*/
// let message = "Привет ";
// let messageEnd;
// if (1>5) { messageEnd= ", Вася!";
// }
// else {
//     messageEnd = ", Оля!";
// }
// message +=  messageEnd;
// console.log(message)

/*замена на условный оператор "?", так компактнее*/
// let message = "Привет ";
// let messageEnd = (1>5) ? ", Вася" : ", Оля";
// message +=  messageEnd;
// console.log(message)

// let message = (92 > "11" && 58 < 100) ? "Истина" : "Ложь";
// console.log(message);

// if (0) {
//     console.log ("Ложь");
// }
// else if (" ") {console.log ("Истина");}

/*Циклы WHILE и FOR*/

// let num=2;
// while (num<5) { console.log(num);
//     num++;
// }

// for (let num = 0; num < 5; num++) {
//     console.log(num);
// }
// let num = 8;
// while (num) {
//   console.log(num);
//   num--;
// }
// console.log(num);

// let num1 = 1;
// let num2 = "2";
// function sum(n1, n2) {
//   return n1 + n2;
// }

// let result1 = sum(3, 7);
// console.log(result1);
// let result2 = sum(4, 9);
// console.log(result2);
// let result3 = sum(num1, num2);
// console.log(result3);

/*Прогрессия*/
// function progress(number) {
//   let result = 0;
//   for (let index = 1; index <= number; index++) {
//       result += index;
//       console.log({ result, index });
//   }

//   return result;
// }
// console.log("result:", progress(50));

/*Факториал*/
// function factorial(number) {
//   let result = 1;
//   for (let index = 1; index <= number; index++) {
//       result *= index;
//       console.log({ result, index });
//   }

//   return result;
// }
// console.log("result:", factorial(10));

// /*Задача скорость движения В1*/
// const distBelgorodToMoskow = 700;
// let speedPlane = 800;
// let speedCar = 70;
// let speedВicycle = 20;
// let speedMen = 5;
// let speedAnt = 0.5;

// // function getTime(distanсe, speed) {
// //   let time = distanсe / speed;
// //   return time;
// // }
// function getTime(distanсe, speed) {
//   let time = distanсe / speed;
//   if (time <= 8) {
//     return "0 days " + time + " hours";
//   }
//   const days = Math.floor(time / 8);
//   const hours = time - days * 8;

//   return days + " days " + hours + " hours";
// }

// console.log(
//   "Время в пути Самолет:",
//   getTime(distBelgorodToMoskow, speedPlane),
//   " ч."
// );
// console.log(
//   "Время в пути  Автомобиль:",
//   getTime(distBelgorodToMoskow, speedCar),
//   " ч."
// );
// console.log(
//   "Время в пути   Велосипед:",
//   getTime(distBelgorodToMoskow, speedВicycle),
//   " ч."
// );
// console.log(
//   "Время в пути  Человек:",
//   getTime(distBelgorodToMoskow, speedMen),
//   " ч."
// );
// console.log(
//   "Время в пути Муравей:",
//   getTime(distBelgorodToMoskow, speedAnt),
//   " ч."
// );

/*Задача скорость движения В2*/
// const distBelgorodToMoskow = 700;
// let speedPlane = 800;
// let speedCar = 70;
// let speedВicycle = 20;
// let speedMen = 5;
// let speedAnt = 0.5;
// let workingTime = 8;

// function getDay(distanсe, speed, work) {
//   let day = distanсe / speed / work;
//   return day;
// }
// console.log(
//   "Дней в пути Самолет:",
//   getDay(distBelgorodToMoskow, speedPlane, workingTime)
// );
// console.log(
//   "Дней в пути  Автомобиль:",
//   getDay(distBelgorodToMoskow, speedCar, workingTime)
// );
// console.log(
//   "Дней в пути   Велосипед:",
//   getDay(distBelgorodToMoskow, speedВicycle, workingTime)
// );
// console.log(
//   "Дней в пути  Человек:",
//   getDay(distBelgorodToMoskow, speedMen, workingTime)
// );
// console.log(
//   "Дней в пути Муравей:",
//   getDay(distBelgorodToMoskow, speedAnt, workingTime)
// );
 

/*setTimeout*/
// function showName() {
// console.log("Вася!");
// }
// setTimeout(showName,0);
// console.log("Коля!")


/*Объект*/

// let userInfo={
//   name: "Вася",
//   age: 30,
// }
// console.log(userInfo);
// console.log(userInfo["name"]);

// function makeUserInfo(name, age) {
//   return{
//     name: name,
//     age: age,
//   };
// }
// let user=makeUserInfo("Катя", 25);
// console.log(user);

//   var scope = "global"; // Объявление глобальной переменной
//   function myFunc() {
//   var scope = "local"; // Объявление локальной переменной с тем же именем
//   alert( scope ); // Используется локальная переменная, а не глобальная
// }
// myFunc(); // выведет "local"
// alert( scope ); // выведет "global"

// let getMassege="Hello";
// console.log(getMassege);


// function catName(name, age) {
//   console.log(`Мою кошку зовут ${name}и ей ${age} лет`);
// }
// catName("Лариса",8);
 
// const useInfo={
//   name:"Вася",
//   age:30,
// }
// let user=useInfo;
// user.age=45;
// console.log(user.age);

// const userInfo={
//     name:"Вася",
//     age:30,
//     userShowInfo(){
//       console.log(`${this.name}`);
//     }
//   }
//   let user=userInfo;
//   userInfo=null;
//   user.userShowInfo();


// let numOne=4.548;
// console.log(numOne.toFixed(1));

// let value="135.58px";
// console.log(parseFloat(value));

// let value=58+"Фрилансер";
// if (value="58Фрилансер") {console.log("Результат выражения Nan") 
// }

// console.log(Math.max(10,58,32,-150,0,63));


/*Округлить число с помощью функции*/
// let numOne=58.858;
// console.log(numOne.toFixed(1));

// let a="фрилансер";
// let text=`Привет! Я ${a}!`;
// console.log(text);


//  let text="фрилансер";
//  console.log(text.slice(-4,-3));

// let text=158+"фрилансер";
// console.log(text);

// let text="фрилансер";
// console.log(text.toLocaleUpperCase());


//  let text="фрилансер";
//  console.log(text.slice(3,6));


// let text="фрилансер";
// console.log(text.includes("лан",3));

// let arr=["Ваня","Саня","Аня","Таня","Оля","Коля"];
// console.log(arr.length);
// let arrNew=arr;
// arrNew.length=[2];
// console.log(arr);
// console.log(arr.length);


