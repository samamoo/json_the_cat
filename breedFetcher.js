const request = require('request');
const catInput = process.argv[2]

request(`https://api.thecatapi.com/v1/breeds/search?q=${catInput}`,(error, response, body) => {
  console.log('error:', error);
  console.log('response:', response && response.statusCode);
  const data = JSON.parse(body);
  //console.log(data);
  console.log(data[0].description);
});