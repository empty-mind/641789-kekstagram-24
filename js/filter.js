import {getUserPhotoDescriptionsList} from './thumbnails.js';
import {debounce} from './utils/debounce.js';
import {getRandomPositiveInteger} from './util.js';

const RANDOM_NOREPEAT_PHOTOS_COUNT = 10;
const RERENDER_DELAY = 500;
const imgFiltersForm = document.querySelector('.img-filters__form');
const imgFiltersButtonDefault = imgFiltersForm.querySelector('#filter-default');
const imgFiltersButtonRandom = imgFiltersForm.querySelector('#filter-random');
const imgFiltersButtondiscussed = imgFiltersForm.querySelector('#filter-discussed');

const getCommentsRank = (commentA, commentB) => commentB.comments.length - commentA.comments.length;

const getRandomPhotos = (array) => {
  for (let i = 0; i < array.length - 1; i++) {
    const randomPhotoIndex = getRandomPositiveInteger(0, array.length - 1);
    [array[i], array[randomPhotoIndex]] = [array[randomPhotoIndex], array[i]];
  }
  return array.slice(0, RANDOM_NOREPEAT_PHOTOS_COUNT);
};

const filterPhotos = (array) => {
  getUserPhotoDescriptionsList(array);
  const delayRender = debounce(getUserPhotoDescriptionsList, RERENDER_DELAY);
  let rerenderArray = [];
  imgFiltersForm.addEventListener('click', (evt) => {
    evt.preventDefault();
    const copyArray = array.slice();
    if (evt.target.matches('#filter-default')) {
      rerenderArray = copyArray;
      imgFiltersButtonDefault.classList.add('img-filters__button--active');
      imgFiltersButtonRandom.classList.remove('img-filters__button--active');
      imgFiltersButtondiscussed.classList.remove('img-filters__button--active');
    }
    if (evt.target.matches('#filter-random')) {
      rerenderArray = getRandomPhotos(copyArray);
      imgFiltersButtonDefault.classList.remove('img-filters__button--active');
      imgFiltersButtonRandom.classList.add('img-filters__button--active');
      imgFiltersButtondiscussed.classList.remove('img-filters__button--active');
    }
    if (evt.target.matches('#filter-discussed')) {
      rerenderArray = copyArray.sort(getCommentsRank);
      imgFiltersButtonDefault.classList.remove('img-filters__button--active');
      imgFiltersButtonRandom.classList.remove('img-filters__button--active');
      imgFiltersButtondiscussed.classList.add('img-filters__button--active');
    }
    delayRender(rerenderArray);
  });
};

export {filterPhotos};
