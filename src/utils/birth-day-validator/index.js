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
      bDay.removeAttribute('max');
    } else {
      if (bDay.validity.rangeOverflow) {
        bDayError.textContent = 'Вам должно быть не менее 18 лет.';
      }
    }
  });
};

export default birthDayValidator;
