// Replace the baseUrl with your personal baseUrl
const baseUrl = 'http://192.168.33.10/';
const Prompt = {};

Prompt.getPrompts = () => {
  const url = `${baseUrl}/html/api/prompt/Read.php`;
  return fetch(url).then(response => {
    if (!response.ok) {
      return new Promise(resolve => resolve([]));
    }
    return response.json().then(jsonResponse => {
      return jsonResponse.records
    });
  });
};

export default Prompt;
