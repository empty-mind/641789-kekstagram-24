const SCALE_STEP_VALUE = 25;
const SCALE_MIN_VALUE = 25;
const SCALE_DEFAULT_VALUE = 100;

const imgUploadPreview = document.querySelector('.img-upload__preview');
const imgUploadPreviewImg = imgUploadPreview.querySelector('img');
const scaleControlValue = document.querySelector('.scale__control--value');
const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');

const effectLevelSlider = document.querySelector('.effect-level__slider');
const effectsList = document.querySelector('.effects__list');
const effectLevelValue = document.querySelector('.effect-level__value');
const effectLevel = document.querySelector('.effect-level');

const onPhotoScaleControlSmallerClick = () => {
  const value = parseFloat(scaleControlValue.value);
  if (value !== SCALE_MIN_VALUE) {
    scaleControlValue.value = `${value - SCALE_STEP_VALUE}%`;
    imgUploadPreviewImg.style.transform = `scale(${(value - SCALE_STEP_VALUE) / 100})`;
  }
};

const onPhotoScaleControlBiggerClick = () => {
  const value = parseFloat(scaleControlValue.value);
  if (value !== SCALE_DEFAULT_VALUE) {
    scaleControlValue.value = `${value + SCALE_STEP_VALUE}%`;
    imgUploadPreviewImg.style.transform = `scale(${(value + SCALE_STEP_VALUE) / 100})`;
  }
};

scaleControlSmaller.addEventListener('click', onPhotoScaleControlSmallerClick);
scaleControlBigger.addEventListener('click', onPhotoScaleControlBiggerClick);

noUiSlider.create(effectLevelSlider, {
  range: {
    min: 0,
    max: 1,
  },
  start: 0,
  step: 0.1,
  connect: 'lower',
  format: {
    to: (value) => Number.isInteger(value) ? value.toFixed(0) : value.toFixed(1),
    from: (value) => parseFloat(value),
  },
});

effectLevelSlider.noUiSlider.on('update', (values, handle) => {
  effectLevelValue.value = values[handle];
  if (imgUploadPreviewImg.classList.contains('effects__preview--chrome')) {
    imgUploadPreviewImg.style.filter = `grayscale(${values[handle]})`;
  }
  if (imgUploadPreviewImg.classList.contains('effects__preview--sepia')) {
    imgUploadPreviewImg.style.filter = `sepia(${values[handle]})`;
  }
  if (imgUploadPreviewImg.classList.contains('effects__preview--marvin')) {
    imgUploadPreviewImg.style.filter = `invert(${values[handle]}%)`;
  }
  if (imgUploadPreviewImg.classList.contains('effects__preview--phobos')) {
    imgUploadPreviewImg.style.filter = `blur(${values[handle]}px)`;
  }
  if (imgUploadPreviewImg.classList.contains('effects__preview--heat')) {
    imgUploadPreviewImg.style.filter = `brightness(${values[handle]})`;
  }
});

effectsList.addEventListener('change', (evt) => {
  if (evt.target.matches('#effect-none')) {
    scaleControlValue.value = `${SCALE_DEFAULT_VALUE}%`;
    imgUploadPreviewImg.style.transform = `scale(${SCALE_DEFAULT_VALUE / 100})`;
    imgUploadPreviewImg.classList.add('effects__preview--none');
    effectLevel.style.display = 'none';
  } else {
    effectLevel.style.display = 'block';
  }

  if (evt.target.matches('#effect-chrome')) {
    scaleControlValue.value = `${SCALE_DEFAULT_VALUE}%`;
    imgUploadPreviewImg.style.transform = `scale(${SCALE_DEFAULT_VALUE / 100})`;
    imgUploadPreviewImg.classList.add('effects__preview--chrome');
    effectLevelSlider.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    });
  } else {
    imgUploadPreviewImg.classList.remove('effects__preview--chrome');
    imgUploadPreviewImg.style.filter = '';
  }

  if (evt.target.matches('#effect-sepia')) {
    scaleControlValue.value = `${SCALE_DEFAULT_VALUE}%`;
    imgUploadPreviewImg.style.transform = `scale(${SCALE_DEFAULT_VALUE / 100})`;
    imgUploadPreviewImg.classList.add('effects__preview--sepia');
    effectLevelSlider.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    });
  } else {
    imgUploadPreviewImg.classList.remove('effects__preview--sepia');
    imgUploadPreviewImg.style.filter = '';
  }

  if (evt.target.matches('#effect-marvin')) {
    scaleControlValue.value = `${SCALE_DEFAULT_VALUE}%`;
    imgUploadPreviewImg.style.transform = `scale(${SCALE_DEFAULT_VALUE / 100})`;
    imgUploadPreviewImg.classList.add('effects__preview--marvin');
    effectLevelSlider.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 100,
      },
      start: 100,
      step: 1,
    });
  } else {
    imgUploadPreviewImg.classList.remove('effects__preview--marvin');
    imgUploadPreviewImg.style.filter = '';
  }

  if (evt.target.matches('#effect-phobos')) {
    scaleControlValue.value = `${SCALE_DEFAULT_VALUE}%`;
    imgUploadPreviewImg.style.transform = `scale(${SCALE_DEFAULT_VALUE / 100})`;
    imgUploadPreviewImg.classList.add('effects__preview--phobos');
    effectLevelSlider.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 3,
      },
      start: 3,
      step: 0.1,
    });
  } else {
    imgUploadPreviewImg.classList.remove('effects__preview--phobos');
    imgUploadPreviewImg.style.filter = '';
  }

  if (evt.target.matches('#effect-heat')) {
    scaleControlValue.value = `${SCALE_DEFAULT_VALUE}%`;
    imgUploadPreviewImg.style.transform = `scale(${SCALE_DEFAULT_VALUE / 100})`;
    imgUploadPreviewImg.classList.add('effects__preview--heat');
    effectLevelSlider.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 3,
      },
      start: 3,
      step: 0.1,
    });
  } else {
    imgUploadPreviewImg.classList.remove('effects__preview--heat');
    imgUploadPreviewImg.style.filter = '';
  }
});
