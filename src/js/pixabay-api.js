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
      'Content-Type': 'application/json',
    },
  };

  fetch(URL, options)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.log(error));
}
