import faker from 'faker';

import { CustomLocation, Mappable } from './Types';

export class User implements Mappable {
  public name: string;
  public location: CustomLocation;
  public color: string = 'green';

  public printName = (): string => {
    return this.name;
  };

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: +faker.address.latitude(),
      lng: +faker.address.longitude()
    };
  }
  markerContent(): string {
    return `User Name: ${this.name}`;
  }
}
