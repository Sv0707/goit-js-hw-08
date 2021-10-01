import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');

let data = {};

const fillData = function () {
  const savedData = localStorage.getItem('feedback-form-state');
  const parseData = JSON.parse(savedData);
  data = parseData;
  const keys = Object.keys(data);
  keys.forEach(key => {
    const input = formRef.elements[key];
    input.value = data[key];
  });
};

fillData();

const onInput = function (e) {
  const input = e.target;
  data[input.name] = input.value;
  const strData = JSON.stringify(data);
  localStorage.setItem('feedback-form-state', strData);
};

const onSubmit = function (e) {
  e.preventDefault();

  console.log(data);
  
  e.currentTarget.reset();
  data = {};
  localStorage.removeItem('feedback-form-state');
};
formRef.addEventListener('input', throttle(onInput, 500));
formRef.addEventListener('submit', onSubmit);
