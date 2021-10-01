/*
  Получение случайного целого числа в заданном интервале, включительно (с добавлением условий)
  Ссылка на источник MDN Web Docs:
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values_inclusive
*/
function getRandomIntInclusive(min, max) {

  min = Math.ceil(min);
  max = Math.floor(max);

  if (min < 0 || max < 0) {
    return 'Диапазон может быть только положительный!';
  }

  if (max <= min) {
    return 'Конечное значение диапазона не может быть \nменьше или равно начальному значению диапазона!';
  }

  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются

}

getRandomIntInclusive(2, 10);

/*
  Проверка максимальной длины строки
*/
function checkStringMaxLength (str, maxLength) {

  return str.length < maxLength;

}

checkStringMaxLength('some string', 140);
