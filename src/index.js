import './style.css';
import formValidator from './utils/form-validator';
import pluralValues from './plural-values';
import passwordComparison from './utils/password-comparison';
import birthDayValidator from './utils/birth-day-validator';

const elements = {
  submit: document.getElementById('submit'),
  name: document.getElementById('firstName'),
  nameError: document.querySelector('#firstName + span.form__field-error'),
  lastName: document.getElementById('lastName'),
  lastNameError: document.querySelector('#lastName + span.form__field-error'),
  email: document.getElementById('email'),
  emailError: document.querySelector('#email + span.form__field-error'),
  password: document.getElementById('password'),
  passwordError: document.querySelector('#password + span.form__field-error'),
  confPass: document.getElementById('confirmPassword'),
  confPassError: document.querySelector(
    '#confirmPassword + span.form__field-error'
  ),
  birthDay: document.getElementById('birthDay'),
  birthDayError: document.querySelector('#birthDay + span.form__field-error'),
};

formValidator(
  elements.submit,
  elements.name,
  elements.nameError,
  pluralValues.name
);

formValidator(
  elements.submit,
  elements.lastName,
  elements.lastNameError,
  pluralValues.lastName
);

formValidator(
  elements.submit,
  elements.email,
  elements.emailError,
  pluralValues.email
);

formValidator(
  elements.submit,
  elements.password,
  elements.passwordError,
  pluralValues.password
);

formValidator(
  elements.submit,
  elements.confPass,
  elements.confPassError,
  pluralValues.password
);

passwordComparison(
  elements.password,
  elements.confPass,
  elements.confPassError
);

birthDayValidator(elements.birthDay, elements.birthDayError);
