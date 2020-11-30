export class ArrayOfNumbers {
  constructor(public collection: number[]) {}
  get(index: number): number {
    return this.collection[index];
  }
}

export class ArrayOfStrings {
  constructor(public collection: string[]) {}
  get(index: number): string {
    return this.collection[index];
  }
}

export class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

// Type Inferece checks the input on the array creation and adds a type for the generic
const oeh = new ArrayOfAnything(['peter', 'hallo']);
oeh.get(1);

// GENERICS WITH FUNCTIONS
function printStrings(arr: string[]): void {
  for (let text of arr) {
    console.log(text);
  }
}

function printNumbers(arr: number[]): void {
  for (let text of arr) {
    console.log(text);
  }
}

function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printAnything<string>(['kjsjdsjd', 'skdjdsk', 'c']);

// Generic Constraints
interface Printable {
  print(): void;
}

class Car implements Printable {
  print(): void {
    console.log('i am a car');
  }
}

class House implements Printable {
  print(): void {
    console.log('i am a house');
  }
}

function printHousesOrCars<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}

printHousesOrCars<Car>([new Car(), new Car()]);
