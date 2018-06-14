const Gminder = {};



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

export default Gminder;
