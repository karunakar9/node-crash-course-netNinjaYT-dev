//second
const peoples = require('./people');

console.log('peoples:',peoples);//1

const data = require('./people');

console.log(data.people, data.ages);//2

const { people, ages } = require('./people');

console.log(people, ages);//3

const os = require('os');

console.log(os.platform(), os.homedir());




