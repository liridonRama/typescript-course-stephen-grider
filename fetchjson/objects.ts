const profile = {
  name: 'alex',
  age: 20,
  coords: {
    lat: 0,
    lng: 15
  },
  setAge(age: number): void {
    this.age = age;
  }
};

interface Coords {
  lat: number;
  lng: number;
}

interface Profile {
  name: string;
  age: number;
  coords: Coords;
  setAge: any;
}

const { age }: Profile = profile;
const {
  coords: { lat, lng }
}: Profile = profile;

console.log(age, lat, lng);
