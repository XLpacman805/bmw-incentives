const bmwResponse93010 = require('./bmw-response-93010.json');
const zipRegion = bmwResponse93010.zipRegion;
const filersNode = bmwResponse93010.filters; 
const offersNode = bmwResponse93010.offers; 

let offersNodeKeys = Object.keys(offersNode);

// For each object in every series array, return the object keys. This is the series key map

let seriesArray = offersNodeKeys.map((key) => {
    return offersNode[key];
});

let seriesArrayKeyMap = seriesArray.map((array) => {
    return array.map((model) => {
        return Object.keys(model);
    });
});

seriesArrayKeyMap.forEach((element) => {
    element.forEach((element2, index2) => {
        if (element2.length === 30) {console.log(element2)};
    });
});

