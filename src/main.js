import fetchImages from './js/pixabay-api';

const form = document.querySelector('.form');

form.addEventListener('submit', e => {
  e.preventDefault();
  const input = e.currentTarget.elements.search;
  if (!input.value) {
    return;
  }
  fetchImages(input.value);
  form.reset();
});
