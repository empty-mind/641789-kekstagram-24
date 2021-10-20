/*
<template id="picture">
<a href="#" class="picture">
  <img class="picture__img" src="" width="182" height="182" alt="Случайная фотография">
  <p class="picture__info">
    <span class="picture__comments"></span>
    <span class="picture__likes"></span>
  </p>
</a>
</template>
*/

import {getUserPhotoDescription} from './data.js';

const userPhotoThumbnailElement = document.querySelector('.pictures');

const userPhotoThumbnailTemplate = document.querySelector('#picture').content.querySelector('.picture');

const userPhotoThumbnails = getUserPhotoDescription();

const thumbnailElement = document.createDocumentFragment();

userPhotoThumbnails.forEach(({url, likes, comments}) => {
  const userPhotoThumbnail = userPhotoThumbnailTemplate.cloneNode(true);
  userPhotoThumbnail.querySelector('.picture__img').src = url;
  userPhotoThumbnail.querySelector('.picture__likes').textContent = likes;
  userPhotoThumbnail.querySelector('.picture__comments').textContent = comments.length;
  thumbnailElement.appendChild(userPhotoThumbnail);
});

userPhotoThumbnailElement.appendChild(thumbnailElement);
