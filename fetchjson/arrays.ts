const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date(), new Date()];

const carsByMake = [['f150'], ['corolla'], ['camaro']];

// typescript helps with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
// carMakers.push(100);

// help with map
carMakers.map((car: string): string => car.toUpperCase());

// flexible types
const importantValues: (Date | string)[] = ['12', new Date()];
let lessImportantValues: (string | Date)[];

// Tuples in Typescript
const drinkt = {
  color: 'brown',
  carbonated: true,
  sugar: 40
};

type Drink = [string, boolean, number];

const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', true, 0];

const carSpecs: [number, number] = [300, 23223];
