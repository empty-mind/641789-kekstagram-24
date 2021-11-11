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

const visibleCommentsCount = bigPictureElement.querySelector('.visible-comments-count');
const COMMENTS_COUNT = 5;
const loadComments = COMMENTS_COUNT;

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
  visibleCommentsCount.textContent = COMMENTS_COUNT;
};

const onModalEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeFullsizePhoto();
  }
};

const openFullsizePhotoModal = (userPhoto) => {
  bigPictureElement.classList.remove('hidden');
  body.classList.add('modal-open');
  socialCommentsCount.classList.add('hidden');
  socialCommentsLoader.classList.add('hidden');
  bigPictureImgTag.src = `${userPhoto.url}`;
  likesCount.textContent = `${userPhoto.likes}`;
  commentsCount.textContent = `${userPhoto.comments.length}`;
  bigPictureDescription.textContent = `${userPhoto.description}`;

  const sliceComments = userPhoto.comments.slice(0, COMMENTS_COUNT);
  sliceComments.forEach(fillComment);

  const onLoadComments = () => {
    const nextComments = userPhoto.comments.slice(loadComments, loadComments + COMMENTS_COUNT);
    nextComments.forEach(fillComment);

    if (visibleCommentsCount.textContent === userPhoto.comments.length) {
      socialCommentsLoader.classList.add('hidden');
    }
    socialCommentsLoader.classList.add('hidden');
    visibleCommentsCount.textContent = userPhoto.comments.length;

  };

  if (userPhoto.comments.length > COMMENTS_COUNT) {
    socialCommentsCount.classList.remove('hidden');
    socialCommentsLoader.classList.remove('hidden');
    socialCommentsLoader.addEventListener('click', onLoadComments);
  }

  document.addEventListener('keydown', onModalEscKeydown);
};

bigPictureCancel.addEventListener('click', closeFullsizePhoto);

export {
  openFullsizePhotoModal,
  closeFullsizePhoto
};
