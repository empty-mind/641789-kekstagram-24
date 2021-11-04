
import {getUserPhotoDescription} from './data.js';
import {openFullsizePhoto} from './fullsize-photo.js';

const userPhotoThumbnailElement = document.querySelector('.pictures');
const userPhotoThumbnailTemplate = document.querySelector('#picture').content.querySelector('.picture');
const userPhotoThumbnails = getUserPhotoDescription();
const thumbnailElement = document.createDocumentFragment();

userPhotoThumbnails.forEach((userPhoto) => {

  const userPhotoThumbnail = userPhotoThumbnailTemplate.cloneNode(true);
  userPhotoThumbnail.querySelector('.picture__img').src = `${userPhoto.url}`;
  userPhotoThumbnail.querySelector('.picture__likes').textContent = `${userPhoto.likes}`;
  userPhotoThumbnail.querySelector('.picture__comments').textContent = `${userPhoto.comments.length}`;
  thumbnailElement.appendChild(userPhotoThumbnail);

  userPhotoThumbnail.addEventListener('click', (evt) => {
    openFullsizePhoto(evt, userPhoto);
  });

});

userPhotoThumbnailElement.appendChild(thumbnailElement);

export {userPhotoThumbnailElement};
