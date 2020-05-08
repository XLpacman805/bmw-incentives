const fs = require('fs');
const bmwdata = require('./bmw-response-93010.json');
const Series3Offers = bmwdata.offers.series3;

let data = JSON.stringify(Series3Offers[0]);

fs.writeFile('output.json', data, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });