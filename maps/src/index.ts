import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';
const person = new User();
const company = new Company();

const map = new CustomMap();
map.addMarker(person);
map.addMarker(company);
