// Получение случайного положительного целого числа в заданном интервале, включительно
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random
function getRandomPositiveInteger (numberOne, numberTwo) {

  const lower = Math.ceil(Math.min(Math.abs(numberOne), Math.abs(numberTwo)));
  const upper = Math.floor(Math.max(Math.abs(numberOne), Math.abs(numberTwo)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);

}

// Проверка максимальной длины строки
function checkStringLength (string = '', length = 140) {

  return string.length <= length;

}

export {
  getRandomPositiveInteger,
  checkStringLength
};
