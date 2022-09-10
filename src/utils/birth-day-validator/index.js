import passedDate from '../passed-date';

/**
 * Валидация даты рождения
 * @param {object} bDay Элемент со ссылкой на дату
 * @param {object} bDayError Элемент с сообщением об ошибке
 */
const birthDayValidator = (bDay, bDayError) => {
  const date = passedDate();

  bDay.addEventListener('blur', function () {
    bDay.setAttribute('max', date);

    if (bDay.validity.valid) {
      bDayError.textContent = '';
      bDayError.className = 'form__field-error';
      bDay.removeAttribute('max');
      submit.removeAttribute('disabled');
    } else {
      if (bDay.validity.valueMissing) {
        bDayError.textContent = `Необходимо ввести дату рождения.`;
      } else if (bDay.validity.rangeOverflow) {
        bDayError.textContent = 'Вам должно быть не меньше 18 лет.';
      }

      submit.setAttribute('disabled', 'true');
    }
  });
};

export default birthDayValidator;
