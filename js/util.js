// Получение случайного положительного целого числа в заданном интервале, включительно
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random
const getRandomPositiveInteger = (numberOne, numberTwo) => {
  const lower = Math.ceil(Math.min(Math.abs(numberOne), Math.abs(numberTwo)));
  const upper = Math.floor(Math.max(Math.abs(numberOne), Math.abs(numberTwo)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

// Проверка максимальной длины строки
const checkStringLength = (string = '', length) => string.length <= length;

const isEscapeKey = (evt) => (evt.key === 'Escape');

export {
  getRandomPositiveInteger,
  checkStringLength,
  isEscapeKey
};
