import {isEscapeKey} from './util.js';
import {checkStringLength} from './util.js';

const MAX_COMMENT_LENGTH = 140;
const MAX_HASHTAG_LENGTH = 20;
const MAX_HASHTAG_COUNT = 5;

const newPhotoForm = document.querySelector('.img-upload__form');
const newPhotoFormInput = newPhotoForm.querySelector('.img-upload__input');
const newPhotoFormModal = newPhotoForm.querySelector('.img-upload__overlay');
const newPhotoFormCancel = newPhotoForm.querySelector('.img-upload__cancel');
const newPhotoFormComment = newPhotoForm.querySelector('.text__description');
const newPhotoFormHashtag = newPhotoForm.querySelector('.text__hashtags');
const hashtagRegularValue = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;
const body = document.querySelector('body');

const onModalEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    newPhotoFormModal.classList.add('hidden');
    body.classList.remove('modal-open');
    newPhotoForm.reset();
  }
};

const cancelEscKeydown = (evt) => {
  evt.stopPropagation();
};

const checkCommentValidity = () => {
  const commentLength = checkStringLength(newPhotoFormComment.value, MAX_COMMENT_LENGTH);
  if (!commentLength) {
    newPhotoFormComment.setCustomValidity('Длина комментария не может составлять больше 140 символов.');
  } else {
    newPhotoFormComment.setCustomValidity('');
  }
  newPhotoFormComment.reportValidity();
};

const toFindDuplicates = (array) => ((new Set(array)).size < array.length); // нашел решение в гугле

const checkHashtagValidity = () => {
  const hashtags = newPhotoFormHashtag.value.toLowerCase().split(' ');

  hashtags.forEach((hashtag) => {
    if (hashtags[0] === '') {
      newPhotoFormHashtag.value = newPhotoFormHashtag.value.trim();
      newPhotoFormHashtag.setCustomValidity('');
    } else if (!hashtag.startsWith('#')) {
      newPhotoFormHashtag.setCustomValidity('хеш-тег начинается с символа # (решётка)');
    } else if (!hashtagRegularValue.test(hashtag)) {
      newPhotoFormHashtag.setCustomValidity('строка после решётки должна состоять из букв и чисел и не может содержать пробелы, спецсимволы (#, @, $ и т. п.), символы пунктуации (тире, дефис, запятая и т. п.), эмодзи и т. д.');
    } else if (hashtag === '#') {
      newPhotoFormHashtag.setCustomValidity('хеш-тег не может состоять только из одной решётки');
    } else if (hashtag.length > MAX_HASHTAG_LENGTH) {
      newPhotoFormHashtag.setCustomValidity('максимальная длина одного хэш-тега 20 символов, включая решётку');
    } else if (toFindDuplicates(hashtags)) {
      newPhotoFormHashtag.setCustomValidity('один и тот же хэш-тег не может быть использован дважды');
    } else if (hashtags.length > MAX_HASHTAG_COUNT) {
      newPhotoFormHashtag.setCustomValidity('нельзя указать больше пяти хэш-тегов');
    } else {
      newPhotoFormHashtag.setCustomValidity('');
    }
  });

  newPhotoFormHashtag.reportValidity('');
};

newPhotoFormCancel.addEventListener('click', () => {
  newPhotoFormModal.classList.add('hidden');
  body.classList.remove('modal-open');
  newPhotoForm.reset();
  newPhotoFormComment.removeEventListener('keydown', cancelEscKeydown);
  newPhotoFormHashtag.removeEventListener('keydown', cancelEscKeydown);
  newPhotoFormComment.removeEventListener('input', checkCommentValidity);
  newPhotoFormHashtag.removeEventListener('input', checkHashtagValidity);
});

newPhotoFormInput.addEventListener('change', () => {
  newPhotoFormModal.classList.remove('hidden');
  body.classList.add('modal-open');
  newPhotoFormComment.addEventListener('keydown', cancelEscKeydown);
  newPhotoFormHashtag.addEventListener('keydown', cancelEscKeydown);
  document.addEventListener('keydown', onModalEscKeydown);
  newPhotoFormComment.addEventListener('input', checkCommentValidity);
  newPhotoFormHashtag.addEventListener('input', checkHashtagValidity);
});
