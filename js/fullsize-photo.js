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
  const bigPictureSocialCommentFragment = bigPictureSocialComment.cloneNode(true);
  bigPictureSocialCommentFragment.querySelector('.social__picture').src = `${comment.avatar}`;
  bigPictureSocialCommentFragment.querySelector('.social__picture').alt = `${comment.name}`;
  bigPictureSocialCommentFragment.querySelector('.social__text').textContent = `${comment.message}`;
  bigPictureSocialComments.append(bigPictureSocialCommentFragment);
};

const openFullsizePhoto = (evt, userPhoto) => {

  evt.preventDefault();
  userPhoto.comments.forEach(fillComment);
  bigPictureElement.classList.remove('hidden');
  body.classList.add('modal-open');
  socialCommentsCount.classList.add('hidden');
  socialCommentsLoader.classList.add('hidden');
  bigPictureImgTag.src = `${userPhoto.url}`;
  likesCount.textContent = `${userPhoto.likes}`;
  commentsCount.textContent = `${userPhoto.comments.length}`;
  bigPictureDescription.textContent = `${userPhoto.description}`;

};

const closeFullsizePhoto = () => {

  bigPictureElement.classList.add('hidden');
  body.classList.remove('modal-open');

};

bigPictureCancel.addEventListener('click', closeFullsizePhoto);

document.addEventListener('keydown', (evt) => {

  if (evt.key === 'Escape') {
    closeFullsizePhoto();
  }

});

export {openFullsizePhoto};
