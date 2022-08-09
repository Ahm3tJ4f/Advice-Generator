const URL = 'https://api.adviceslip.com/advice';

const getAdvice = async () => {
  const response = await axios.get(URL);
  const quote = response.data.slip.advice;
  const id = response.data.slip.id;

  document.querySelector('.advice__quote').innerHTML = quote;
  document.querySelector('.advice__title').innerHTML = `Advice #${id}`;
  console.log(quote);
  console.log(id);

  
};

const button = document.querySelector('.card__button');

button.addEventListener('click', getAdvice);

button.addEventListener('click', function () {
  const dice = document.querySelector('.card__button--dice');
  dice.classList.remove('rotate');
  setTimeout(() => {
    dice.classList.add('rotate');
  });
});
