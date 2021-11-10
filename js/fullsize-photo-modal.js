import {isEscapeKey} from './util.js';

const bigPictureElement = document.querySelector('.big-picture');
const bigPictureImgElement = bigPictureElement.querySelector('.big-picture__img');
const bigPictureImgTag = bigPictureImgElement.querySelector('img');
const bigPictureCancel = bigPictureElement.querySelector('.big-picture__cancel');
const socialCommentsCount = bigPictureElement.querySelector('.social__comment-count');
const socialCommentsLoader = bigPictureElement.querySelector('.comments-loader');
const likesCount = bigPictureElement.querySelector('.likes-count');
const commentsCount = bigPictureElement.querySelector('.comments-count');
const bigPictureDescription = bigPictureElement.querySelector('.social__caption');
const bigPictureSocialComments = bigPictureElement.querySelector('.social__comments');
const bigPictureSocialComment = bigPictureElement.querySelector('.social__comment');
const body = document.querySelector('body');

const deleteCommentsList = () => {
  bigPictureSocialComments.innerHTML = '';
};

deleteCommentsList();

const fillComment = (comment) => {
  const socialComment = bigPictureSocialComment.cloneNode(true);
  socialComment.querySelector('.social__picture').src = `${comment.avatar}`;
  socialComment.querySelector('.social__picture').alt = `${comment.name}`;
  socialComment.querySelector('.social__text').textContent = `${comment.message}`;
  bigPictureSocialComments.append(socialComment);
};

const closeFullsizePhoto = () => {
  bigPictureElement.classList.add('hidden');
  body.classList.remove('modal-open');
  deleteCommentsList();

  // eslint ругается на вызов до определения,
  // но в демке также - вызов до определения, как быть?
  // document.removeEventListener('keydown', onModalEscKeydown);
};

const onModalEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeFullsizePhoto();
  }
};

const openFullsizePhotoModal = (userPhoto) => {
  userPhoto.comments.forEach(fillComment);
  bigPictureElement.classList.remove('hidden');
  body.classList.add('modal-open');
  socialCommentsCount.classList.add('hidden');
  socialCommentsLoader.classList.add('hidden');
  bigPictureImgTag.src = `${userPhoto.url}`;
  likesCount.textContent = `${userPhoto.likes}`;
  commentsCount.textContent = `${userPhoto.comments.length}`;
  bigPictureDescription.textContent = `${userPhoto.description}`;

  document.addEventListener('keydown', onModalEscKeydown);
};

bigPictureCancel.addEventListener('click', closeFullsizePhoto);

export {
  openFullsizePhotoModal,
  closeFullsizePhoto
};
