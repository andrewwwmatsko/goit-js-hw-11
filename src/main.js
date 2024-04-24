import fetchImages from './js/pixabay-api';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

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
