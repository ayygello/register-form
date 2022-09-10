/**
 * Функция поиска строкового значение даты 18 лет назад
 * @return {String}
 */
const passedDate = () => {
  const now = new Date();
  const result = new Date(
    now.getFullYear() - 18,
    now.getMonth(),
    now.getDay() + 4
  );

  return result.toLocaleDateString().split('.').reverse().join('-');
};

export default passedDate;
