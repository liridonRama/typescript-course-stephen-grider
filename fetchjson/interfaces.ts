export interface Todo {
  userId?: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface Car {
  name: string;
  year: Date;
  broken: boolean;
  dream?: boolean;
  summary(): string;
}

export interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return 'name ' + this.name;
  }
};

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return 'my drink is tasty a.f. ' + this.color;
  }
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(drink);
printSummary(oldCivic);
