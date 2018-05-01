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

Gminder.getGminder = (id) => {
  const url = `${baseUrl}/html/api/gminder/ReadOne.php?gminderID=${id}`;
  return fetch(url).then(response => {
    if (!response.ok) {
      return new Promise(resolve => resolve([]));
    }
    return response.json().then(jsonResponse => {
      return jsonResponse
    });
  });
};

Gminder.createGminder = text => {
  const url = `${baseUrl}/html/api/gminder/Create.php`;
  const fetchOptions = {
    method: 'POST',
    body: JSON.stringify({
      userID: 5,
      category: "relieved",
      mainResponse: text,
      author: "none",
      promptID: 8,
      reason: "limerence",
      source: "my mind",
      rating: "1",
      who: "me",
      eventDate: "4/30/2018",
      collection: "what is collection again?",
      publicFlag: 0
    },)
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

Gminder.deleteGminder = id => {
  const url = `${baseUrl}/html/api/gminder/Delete.php/${id}`;
  const fetchOptions = {
    method: 'DELETE'
  };
  return fetch(url, fetchOptions);
};

export default Gminder;
