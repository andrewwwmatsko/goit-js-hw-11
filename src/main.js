import fetchImages from './js/pixabay-api';

const form = document.querySelector('.form');

form.addEventListener('submit', e => {
  e.preventDefault();
  const inputValue = e.currentTarget.elements.search.value.trim();
  if (!inputValue) {
    return;
  }
  fetchImages(inputValue);
  form.reset();
});
