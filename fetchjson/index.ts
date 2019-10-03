import axios from 'axios';
import { Todo } from './interfaces';
import './objects';

const url = 'http://jsonplaceholder.typicode.com/todos/1';

axios.get(url).then(response => {
  const { id, title, completed, userId } = response.data as Todo;

  logTodo(id, title, completed);
});

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
  The Todo with ID: ${id}
  Has a title of: ${title}
  Is it finished? ${completed}
  `);
};

const forecast = {
  date: new Date(),
  weather: 'sunny'
};

const logWeather = ({
  date,
  weather
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};
logWeather(forecast);

console.log(forecast.date.toLocaleDateString('us'));
