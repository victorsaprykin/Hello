'use strict';

// 22:00 - 06:00 - ночь
// 06:00 - 12:00 - утро
// 12:00 - 18:00 - день
// 18:00 - 22:00 - вечер
let date = new Date();
let hours = new Date().getHours();
let min = new Date().getMinutes();
let sec = new Date().getSeconds();

const hello = [];
console.log(sec);

// function currentTime() {
//   hours = updateTime(hours);
//   min = updateTime(min);
//   sec = updateTime(sec);
//   let t = setTimeout(function(){ currentTime() }, 1000)
// };
// currentTime()

// function updateTime(n){
//   if (n < 10) {
//     return '0' + n;
//   }
//   else {
//     return n;
//   }
// }

hello.textContent =
  hours < 6 || hours > 22
    ? 'Доброй ночи!'
    : hours <= 10
    ? 'Доброе утро!'
    : hours <= 18
    ? 'Добрый день!'
    : 'Добрый вечер!';


const days = [
  'Воскресенье',
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота',
];

const day = days[date.getDay()];

const time = date.toLocaleTimeString('en');

console.log(time);

const newDate = new Date(new Date().getFullYear() + 1, 0, 1);

const weekDay = [];
weekDay.textContent = 'Сегодня: ' + day;

const newYearDays = [];

const changeEnding = (num) => {
  const textVariant = [' день', ' дня', ' дней'];
  const n1 = num % 100,
    n2 = num % 10;
  return n1 > 4 && n1 < 21
    ? num + textVariant[2]
    : n2 === 1
    ? num + textVariant[0]
    : n2 > 1 && n2 < 5
    ? num + textVariant[1]
    : num + textVariant[2];
};

const currentTime = [];
currentTime.textContent = 'Текущее время: ' + time;
newYearDays.textContent =
  'До нового года осталось ' +
  changeEnding(
    Math.ceil((newDate.getTime() - date.getTime()) / 1000 / 60 / 60 / 24)
  );

const timer = () => {};

const DomElement = function (selector, height, width, bg, fontSize, text) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
  this.text = text;

  this.makeElem = function () {
    let element;

    element = document.createElement('div');

    element.innerHTML = this.text;
    element.style.cssText = `height: ${this.height}px;
      width: ${this.width}px;
      background: ${this.bg};
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      font-size: ${this.fontSize}px`;

    return element;
  };
};

const lines = [
  `${hello.textContent}<br>`,
  `${weekDay.textContent}<br>`,
  `${currentTime.textContent}<br>`,
  `${newYearDays.textContent}`,
];

const text = lines.join('\n');

const block = new DomElement('#best', 500, 700, '#44e418', 32, text);

document.body.append(block.makeElem());
