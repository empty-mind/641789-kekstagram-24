import {openFullsizePhotoModal} from './fullsize-photo-modal.js';

const userPhotoThumbnailElement = document.querySelector('.pictures');
const userPhotoThumbnailTemplate = document.querySelector('#picture').content.querySelector('.picture');
const imgFilters = document.querySelector('.img-filters');

const getUserPhotoDescriptionsList = (userPhotoThumbnails) => {
  const userPhotoThumbnailElementFragment = document.createDocumentFragment();
  const userPhotoThumbnailsCopy = userPhotoThumbnails.slice();
  const picturesThumbnails = document.querySelectorAll('.picture');
  picturesThumbnails.forEach((picturesThumbnail) => picturesThumbnail.remove());

  userPhotoThumbnailsCopy
    .forEach((userPhoto) => {
      const userPhotoElement = userPhotoThumbnailTemplate.cloneNode(true);
      userPhotoElement.querySelector('.picture__img').src = `${userPhoto.url}`;
      userPhotoElement.querySelector('.picture__likes').textContent = `${userPhoto.likes}`;
      userPhotoElement.querySelector('.picture__comments').textContent = `${userPhoto.comments.length}`;
      userPhotoThumbnailElementFragment.appendChild(userPhotoElement);

      userPhotoElement.addEventListener('click', () => {
        openFullsizePhotoModal(userPhoto);
      });

    });
  userPhotoThumbnailElement.appendChild(userPhotoThumbnailElementFragment);
  imgFilters.classList.remove('img-filters--inactive');
};

export {getUserPhotoDescriptionsList};
