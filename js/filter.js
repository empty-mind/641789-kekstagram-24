import {getUserPhotoDescriptionsList} from './thumbnails.js';
import {debounce} from './utils/debounce.js';
import {getRandomPositiveInteger} from './util.js';

const RANDOM_NOREPEAT_PHOTOS_COUNT = 10;
const RERENDER_DELAY = 500;
const imgFiltersForm = document.querySelector('.img-filters__form');

const getCommentsRank = (commentA, commentB) => commentB.comments.length - commentA.comments.length;

const getRandomPhotos = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const randomPhotoIndex = getRandomPositiveInteger(0, array.length - 1);
    [array[i], array[randomPhotoIndex]] = [array[randomPhotoIndex], array[i]];
  }
  let arraySlice = [];
  arraySlice = array.slice(0, RANDOM_NOREPEAT_PHOTOS_COUNT);
  return arraySlice;
};

const filterPhotos = (array) => {
  const delayRender = debounce(getUserPhotoDescriptionsList, RERENDER_DELAY);
  let rerenderArray = [];
  imgFiltersForm.addEventListener('click', (evt) => {
    evt.preventDefault();
    const copyArray = array.slice();
    if (evt.target.matches('#filter-default')) {
      rerenderArray = copyArray;
    }
    if (evt.target.matches('#filter-random')) {
      rerenderArray = getRandomPhotos(copyArray);
    }
    if (evt.target.matches('#filter-discussed')) {
      rerenderArray = copyArray.sort(getCommentsRank);
    }
    delayRender(rerenderArray);
  });
};

export {filterPhotos};
