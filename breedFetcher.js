const request = require('request');
const breedName = process.argv[2];


const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,(error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    const data = JSON.parse(body);
    const breed = data[0];
    //How to access other keys in the data object instead of indexing.
    // const {energy_level, grooming: hygiene, stranger_friendly, description} = breed;
    // const grooming = hygiene;
    if (data.length === 0) {
      callback('Sorry! Your requested breed was not found.', null);
    } else {
      callback(null, breed.description);
    }
    //console.log('response:', response && response.statusCode);
  });
};

// fetchBreedDescription(breedName)

module.exports = {fetchBreedDescription};