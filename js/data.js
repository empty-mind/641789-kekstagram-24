// Вспомогательная функция для вычисления случайного числа из диапазона
import {getRandomPositiveInteger} from './util.js';

// Данные с описанием фотографий
const DESCRIPTIONS = [
  'Скучное описание фотографии',
  'Еще одно скучное описание фотографии',
  'Некое скучное описание фотографии',
  'Еще одно некое скучное описание фотографии',
  'Будущего нет',
  'Заблудшая душа в мире безысходности',
];

// Данные с комментариями
const COMMENT_MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

// Данные с именами
const NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];

// Количество сгенерированных объектов (по условию 25)
const GENERATED_OBJECTS_COUNT = 25;

// Минимальное количество лайков (по условию 15)
const MIN_LIKES_COUNT = 15;

// Максимальное количество лайков (по условию 200)
const MAX_LIKES_COUNT = 200;

// Минимальное значение в ссылке на аватар (по условию 1)
const MIN_AVATAR_URL_VALUE = 1;

// Максильное значение в ссылке на аватар (по условию 6)
const MAX_AVATAR_URL_VALUE = 6;

// Количество комментариев (по условию свободный выбор)
const COMMENTS_COUNT = 8;

// Возвращает случаный элемент произвольного массива
function getRandomArrayElement (elements) {

  return elements[getRandomPositiveInteger(0, elements.length - 1)];

}

// Собирает строку для ссылки на аватар со случайным значением
function getAvatarUrl () {

  return `img/avatar-${getRandomPositiveInteger(MIN_AVATAR_URL_VALUE, MAX_AVATAR_URL_VALUE)}.svg`;

}

// Собирает объект - комментарий
function createComment (index) {

  return {
    id: index,
    avatar: getAvatarUrl(),
    message: `${getRandomArrayElement(COMMENT_MESSAGES)} ${getRandomArrayElement(COMMENT_MESSAGES)}`,
    name:  getRandomArrayElement(NAMES),
  };

}

// Собирает массив из объектов - комментариев
function getCommentsList (commentsCount) {

  const RESULT = [];

  for (let index = 1; index <= commentsCount; index++) {
    RESULT.push(createComment(index));
  }

  return RESULT;

}

// Собирает объект - описание фото
function createUserPhotoDescription (index) {

  return {
    id: index,
    url: `photos/${index}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomPositiveInteger(MIN_LIKES_COUNT, MAX_LIKES_COUNT),
    comments: getCommentsList(getRandomPositiveInteger(1, COMMENTS_COUNT)),
  };

}

// Собирает массив из объектов - описаний фото
function getUserPhotoDescription () {

  const RESULT = [];

  for (let index = 1; index <= GENERATED_OBJECTS_COUNT; index++) {
    RESULT.push(createUserPhotoDescription(index));
  }

  return RESULT;

}

export {getUserPhotoDescription};
