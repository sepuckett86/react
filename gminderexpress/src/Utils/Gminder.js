const Gminder = {};

const baseUrl = 'http://localhost:3000/api';

Gminder.getGminders = () => {
  return fetch('/api/gminder').then(response => {
    if (!response.ok) {
      return new Promise(resolve => resolve([]));
    }
    return response.json().then(jsonResponse => {
      return jsonResponse
    });
  });
};

Gminder.getPrompts = () => {
  return fetch('/api/prompt').then(response => {
    if (!response.ok) {
      return new Promise(resolve => resolve([]));
    }
    return response.json().then(jsonResponse => {
      return jsonResponse
    });
  });
};

Gminder.addGminder = (gminder) => {
  const url = `${baseUrl}/gminder`;
    return fetch(url,
          {
            method: 'POST',
            headers: {
                      'Content-Type': 'application/json'
                     },
            body: JSON.stringify({gminder: gminder})
          }).then(response => {
            if (!response.ok) {
              return new Promise(resolve => resolve(null));
              }
            return response.json();
          }).then(jsonResponse => {
            return jsonResponse
          })
        }

export default Gminder;
