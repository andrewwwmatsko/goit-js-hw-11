import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import icon from '../img/error-icon.svg';

export default function fetchImages(searchValue) {
  const authKey = '43558017-e13ccc47d2aef7f917b5afe22';
  const searchParams = new URLSearchParams({
    key: authKey,
    q: searchValue,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  const URL = `https://pixabay.com/api?${searchParams}`;
  const options = {
    headers: {
      Accept: 'text/html',
    },
  };

  return fetch(URL, options)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      if (data.total === 0) {
        iziToast.show({
          class: 'search-404',
          message:
            'Sorry, there are no images matching your search query. Please, try again!',
          // messageColor: '#fafafb',
          position: 'topRight',
          iconUrl: icon,
          backgroundColor: '#EF4040',
          transitionIn: 'bounceInDown',
          transitionOut: 'fadeOutUp',
          theme: 'dark',
          closeOnClick: true,
        });
        return;
      }
      console.log(data);
    })
    .catch(error => console.log(error));
}
