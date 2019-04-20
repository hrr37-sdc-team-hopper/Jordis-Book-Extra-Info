
const fs = require('fs');

const {
  type, pageNum, publisher, dates, title, isbn, language, characterArr, awardsArr, editionsArr, settings,
} = require('./sampleDataMethods.js');

const createDataObj = () => {
  const dataObj = {
    type: type(),
    pageNum: pageNum(),
    publisher: publisher(),
    dates: dates(),
    title: title(),
    isbn10: isbn(10),
    isbn13: isbn(13),
    language: language(),
    characters: characterArr(),
    settings: settings(),
    litAwards: awardsArr(),
    editions: editionsArr(),
  };
  return dataObj;
};

let dataObj = createDataObj();

console.log('dataObj = ', dataObj);

// create array to hold data objs
let createDataList = () => {
  var dataList = [];
  for (let i = 0; i < 1000000; i++) {
    dataList.push(dataObj);
  }
  return JSON.stringify(dataList);
}

let dataList = createDataList();

// write the data in 10 json files
let createFile = () => {
  for (let i = 1; i <= 10; i++) {
    fs.writeFileSync(`./mockDataFiles/mockData${i}.json`, dataList);
  }
};

createFile();

module.exports.createDataObj = createDataObj;


