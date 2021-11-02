import {getRandomPositiveInteger} from './util.js';

const DESCRIPTIONS = [
  'Скучное описание фотографии',
  'Еще одно скучное описание фотографии',
  'Некое скучное описание фотографии',
  'Еще одно некое скучное описание фотографии',
  'Будущего нет',
  'Заблудшая душа в мире безысходности',
];

const COMMENT_MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

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

const GENERATED_OBJECTS_COUNT = 25;
const MIN_LIKES_COUNT = 15;
const MAX_LIKES_COUNT = 200;
const MIN_AVATAR_URL_VALUE = 1;
const MAX_AVATAR_URL_VALUE = 6;
const COMMENTS_COUNT = 8;

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

const getAvatarUrl = () => `img/avatar-${getRandomPositiveInteger(MIN_AVATAR_URL_VALUE, MAX_AVATAR_URL_VALUE)}.svg`;

// ошибка линтера при стрелочной функции
function createComment (index) {

  return {
    id: index,
    avatar: getAvatarUrl(),
    message: `${getRandomArrayElement(COMMENT_MESSAGES)} ${getRandomArrayElement(COMMENT_MESSAGES)}`,
    name:  getRandomArrayElement(NAMES),
  };

}

const getCommentsList = (commentsCount) => {

  const RESULT = [];

  for (let index = 1; index <= commentsCount; index++) {
    RESULT.push(createComment(index));
  }

  return RESULT;

};

// ошибка линтера при стрелочной функции
function createUserPhotoDescription (index) {

  return {
    id: index,
    url: `photos/${index}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomPositiveInteger(MIN_LIKES_COUNT, MAX_LIKES_COUNT),
    comments: getCommentsList(getRandomPositiveInteger(1, COMMENTS_COUNT)),
  };

}

const getUserPhotoDescription = () => {

  const RESULT = [];

  for (let index = 1; index <= GENERATED_OBJECTS_COUNT; index++) {
    RESULT.push(createUserPhotoDescription(index));
  }

  return RESULT;

};

export {getUserPhotoDescription};
