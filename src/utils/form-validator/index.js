/**
 * Валидация формы
 * @param {object} submit Кнопка подтверждения формы (Submit)
 * @param {object} element Элемент по которому проходит валидация
 * @param {object} elementError Элемент с сообщением об ошибке
 * @param {object || null} message Сообщение об ошибке
 */
const formValidator = (
  submit,
  element,
  elementError,
  message = {
    first: '',
    second: '',
  }
) => {
  element.addEventListener('blur', function () {
    if (element.validity.valid) {
      elementError.textContent = '';
      elementError.className = 'form__field-error';
      submit.removeAttribute('disabled');
    } else {
      submit.setAttribute('disabled', 'true');
      showError();
    }
  });

  form.addEventListener('submit', function (event) {
    if (!element.validity.valid) {
      event.preventDefault();
      submit.setAttribute('disabled', 'true');
      showError();
    }
  });

  const showError = () => {
    if (element.validity.valueMissing) {
      elementError.textContent = `Необходимо ввести ${message.first}.`;
    } else if (element.validity.patternMismatch) {
      elementError.textContent = message.second;
    }
  };
};

// const formValidator = (
//   elements
// ) => {
//   element.addEventListener('blur', function () {
//     if (element.validity.valid) {
//       elementError.textContent = '';
//       elementError.className = 'form__field-error';
//       submit.removeAttribute('disabled');
//     } else {
//       submit.setAttribute('disabled', 'true');
//       showError();
//     }
//   });

//   form.addEventListener('submit', function (event) {
//     if (!element.validity.valid) {
//       event.preventDefault();
//       submit.setAttribute('disabled', 'true');
//       showError();
//     }
//   });

//   const showError = () => {
//     if (element.validity.valueMissing ) {
//       elementError.textContent = `Необходимо ввести ${message.first}.`;
//     } else if (element.validity.patternMismatch) {
//       elementError.textContent = message.second;
//     }
//   };
// };

export default formValidator;
