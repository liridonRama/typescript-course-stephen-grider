import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbers = new NumbersCollection([1, 2, 5654, 6, -1]);
const linkedList = new LinkedList();
linkedList.add(12);
linkedList.add(16);
linkedList.add(1);
linkedList.add(-12);
linkedList.add(-1212);

console.log(numbers.data);
numbers.sort();
console.log(numbers.data);
linkedList.print();
linkedList.sort();
linkedList.print();
