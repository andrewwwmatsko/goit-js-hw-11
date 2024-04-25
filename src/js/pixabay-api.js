import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import icon from '../img/error-icon.svg';

import createMarkup from './render-functions';

export default function fetchImages(searchValue) {
  const listOfImages = document.querySelector('#images');
  listOfImages.innerHTML = '';
  // loader on
  const loader = document.querySelector('.loader');
  loader.style.display = 'block';

  // fetch options
  const authKey = '43558017-e13ccc47d2aef7f917b5afe22';
  const searchParams = new URLSearchParams({
    key: authKey,
    q: searchValue,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  const URL = `https://pixabay.com/api/?${searchParams}`;
  const options = {
    headers: {
      Accept: 'text/html',
    },
  };

  //fetch
  return fetch(URL, options)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      if (data.total === 0) {
        const images = document.querySelector('#images');
        images.innerHTML = '';

        iziToast.show({
          class: 'search-404',
          message:
            'Sorry, there are no images matching your search query. Please, try again!',
          position: 'topRight',
          iconUrl: icon,
          backgroundColor: '#EF4040',
          transitionIn: 'bounceInDown',
          transitionOut: 'fadeOutUp',
          theme: 'dark',
          closeOnClick: true,
        });

        //fetch off
        loader.style.display = 'none';
        return;
      }

      //markup
      createMarkup(data);
      loader.style.display = 'none';
    })
    .catch(error => {
      loader.style.display = 'none';
      console.log(error.message);
    });
}
