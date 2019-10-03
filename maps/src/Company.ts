import faker from 'faker';
import { CustomLocation, Mappable } from './Types';

export class Company implements Mappable {
  public companyName: string;
  public catchPhrase: string;
  public location: CustomLocation;
  public color: string;

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: +faker.address.latitude(),
      lng: +faker.address.longitude()
    };
    this.color = 'red';
  }
  markerContent(): string {
    return `
    <div>
      <h1>Company Name: ${this.companyName}</h1>
      <h3>Catch Phrase: ${this.catchPhrase}</h3>
    </div>
    `;
  }
}
