//first
const speak = () => {
  console.log('hello, ninjas');
}

speak();

// Global Object like window object in browser

// console.log(global);

// global.setTimeout(() => {
//   console.log('in the timeout');
// }, 3000);

setTimeout(() => {
  console.log('in the timeout');
  clearInterval(int);
}, 3000);

const int = setInterval(() => {
  console.log('in the interval');
}, 1000);

console.log('dirname: ',__dirname);
console.log('filename: ',__filename);

// no access to DOM methods will throws error in console
// console.log(document.querySelector);
