import birthDayValidator from '../birth-day-validator';

/**
 * Валидация формы
 * @param {object} form Форма, на которую добавляется listener
 * @param {object} element Элемент по которому проходит валидация
 * @param {object} elementError Элемент с сообщением об ошибке
 * @param {object || null} message Сообщение об ошибке
 */
const formValidator = (
  form,
  element,
  elementError,
  message = {
    first: '',
    second: '',
  }
) => {
  form.addEventListener('submit', function (event) {
    if (element.validity.valid) {
      elementError.textContent = '';
      elementError.className = 'form__field-error';
    } else {
      event.preventDefault();
      showError();
    }
  });

  const showError = () => {
    if (element.validity.valueMissing) {
      elementError.textContent = `Необходимо ввести ${message.first}.`;
    } else if (element.validity.patternMismatch) {
      elementError.textContent = message.second;
    } else if (element === birthDay) {
      birthDayValidator(element, elementError);
    }
  };
};

export default formValidator;
