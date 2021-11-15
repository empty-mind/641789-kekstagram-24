const getData = (onSuccess, onFail) => {
  fetch('https://24.javascript.pages.academy/kekstagram/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        onFail('Не удалось загрузить данные. Попробуйте позже.');
      }
    })
    .then((data) => {
      onSuccess(data);
    });
};

const errorMessageContainer = document.querySelector('#error-message').content.querySelector('.error-message');
const bodyContainer = document.body;

const showErrorMessage = (errorMessage) => {
  errorMessageContainer.textContent = errorMessage;
  bodyContainer.append(errorMessageContainer);
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    'https://24.javascript.pages.academy/kekstagram',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => {
      onFail();
    });
};

export {getData, sendData, showErrorMessage};
