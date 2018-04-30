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

Gminder.createGminder = (text) => {
  const url = `${baseUrl}/html/api/gminder/Create.php`;
  const getDate = () => {
  let d = new Date();
  let year = d.getFullYear();
  let month = d.getMonth() + 1;
  let day = d.getDate();
  const fullDate = `${month}/${day}/${year}`;
  return fullDate;
}
  const fetchOptions = {
    method: 'POST',
    body: JSON.stringify({ gminder:
      {gminderID: "100",
      userID: "27",
      category: "custom",
      mainResponse: text,
      author: null,
      promptID: null,
      reason: null,
      source: null,
      rating: "1",
      recordedDate: "2018-02-12 04:02:52",
      eventDate: null,
      updatedDate: null,
      who: null,
      collection: null}
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

export default Gminder;
