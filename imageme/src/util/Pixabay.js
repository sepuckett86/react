import Keys from './keys.js';

const apiKey = Keys.api;

const Pixabay = {};

Pixabay.search = (searchTerm) => {
  const url = `https://pixabay.com/api/?key=${apiKey}&q=${searchTerm}&image_type=photo&per_page=200`
  return fetch(url).then(response => {
    if (!response.ok) {
      return new Promise(resolve => resolve([]));
    }
    return response.json().then(jsonResponse => {

      return jsonResponse
    });
  });
};

export default Pixabay;
