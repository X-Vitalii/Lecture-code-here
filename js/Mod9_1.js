let dog = {
  name: 'Mango',
  age: 3,
  isGoodBoy: true,
  bark() {
    console.log('Woof!');
  },
};

let json = JSON.stringify(dog);
console.log(json);

// json = JSON.stringify(() => console.log('Well, this is awkward'));
// console.log(json);

dog = JSON.parse(json);
console.log(dog);
console.log(dog.age);

// let data = JSON.parse('Well, this is awkward');
let data = JSON.parse('{"username": "Mango"}');
console.log(data);

try {
  json = JSON.parse('Well, this is awkward');
} catch (error) {
  console.log(error.name);
  console.log(error.message);
  console.log(error.stack);
}
console.log('Script continue to work!');

console.log(localStorage);

localStorage.setItem('ui-theme', 'semi-light');
console.log(window.localStorage);

const settings = {
  theme: 'dark',
  isAsenticated: true,
  options: [1, 2, 3],
};

// localStorage.setItem('settings', JSON.stringify(settings));

// let saveLocStor = window.localStorage.getItem('options');
// console.log(saveLocStor);

localStorage.setItem('settings', JSON.stringify(settings));

let saveLocStor = window.localStorage.getItem('options');
console.log(saveLocStor);
