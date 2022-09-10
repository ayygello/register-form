/**
 * Валидация пароля по сопоставлению
 * @param {object} pass Элемент со ссылкой на пароль
 * @param {object} confPass Элемент со ссылкой на подтверждение пароля
 * @param {object} confPassError Элемент с сообщением об ошибке
 */
const passwordComparison = (pass, confPass, confPassError) => {
  confPass.addEventListener('blur', function () {
    if (pass.value === confPass.value) {
      confPassError.textContent = '';
      confPassError.className = 'form__field-error';
    } else {
      confPassError.textContent = 'Пароли должны совпадать.';
    }
  });
};

export default passwordComparison;
