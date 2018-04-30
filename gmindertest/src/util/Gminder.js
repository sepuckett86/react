import 'whatwg-fetch';

// Replace the baseUrl with your personal baseUrl
const baseUrl = 'http://192.168.33.10/';
const Gminder = {};


Gminder.getGminders = () => {
  const url = `${baseUrl}/html/api/gminder/Read.php`;
  return fetch(url).then(response => {
    if (!response.ok) {
      return new Promise(resolve => resolve([]));
    }
    return response.json().then(jsonResponse => {
      return jsonResponse.records
    });
  });
};



export default Gminder;
