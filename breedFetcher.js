const request = require('request');
const catInput = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${catInput}`,(error, response, body) => {
  if (error) {
    console.log('Error:', error)
    return;
  }
  
  const data = JSON.parse(body);
  const breed = data[0];
  //How to access other keys in the data object instead of indexing.
  const {energy_level, grooming: hygiene, stranger_friendly, description} = breed;
  const grooming = hygiene;
  if (data.length === 0) {
    console.log('Sorry! Your requested breed was not found.');
  } else {
    console.log(description);
  }
  //console.log('response:', response && response.statusCode);
});