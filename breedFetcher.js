const request = require('request');
//const fs = require('fs'); //not req'd

// const args = process.argv.slice(2);
// const catbreed = args[0]; 
//allows user to enter catbreed as arg in command-line
                          //ex: node breedFetcher.js Chartreux

const fetchBreedDescription = function(catbreed, asyncReturn) {
  
  request(`https://api.thecatapi.com/v1/breeds/search?q=${catbreed}`, (error, response, body) => {
    if (!error) {
      if (!JSON.parse(body)[0]) {
        asyncReturn(JSON.parse(body)[0], null);
      } else {
        asyncReturn(null, JSON.parse(body)[0].description)

      }
      // console.log('Cat not found!', error);
      
    } else {
      console.error('error: ', error);
      asyncReturn(error, null);
      // console.log(`${catbreed}: \n`, catInfo[0].description);
    }
  });
  //since the object is enclosed in an array, catInfo[0].description accesses the object,
  //and key named description. 

};


module.exports = { fetchBreedDescription };