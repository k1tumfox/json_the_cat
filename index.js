const { fetchBreedDescription } = require('./breedFetcher');
//remember to: "node index.js maine" in terminal
const args = process.argv.slice(2);
const breedName = args[0]; //allows user to enter catbreed as arg in command-line
                          //ex: node breedFetcher.js Chartreux

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details: ', error);
  } else {
    
    console.log(`the chosen cat: ${breedName}\n`, desc);
  }
});