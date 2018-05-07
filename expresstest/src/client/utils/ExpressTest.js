const ExpressTest = {};
const baseUrl = 'http://localhost:3000';

ExpressTest.getDatabase = () => {
  const url = `${baseUrl}/data/`;
  return fetch(url).then(response => {
    if (!response.ok) {
      return new Promise(resolve => resolve(null));
    }
    return response.json().then(jsonResponse => {
      return jsonResponse;
    });
  });
};

ExpressTest.putDatabase = (newData) => {
  const url = `${baseUrl}/data`;
  const fetchOptions = {
    method: 'PUT',
    body: JSON.stringify({newData})
  };
  return fetch(url, fetchOptions).then(response => {
    if (!response.ok) {
      return new Promise(resolve => resolve(null));
    }
    return response.json().then(jsonResponse => {
      return jsonResponse;
    });
  });
};

export default ExpressTest;
