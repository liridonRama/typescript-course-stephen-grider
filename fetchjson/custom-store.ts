function myFunction(initState?: any) {
  const state = initState || {};
  const dispatch = (key: string, value: any) => {
    state[key] = value;
  };

  return [state, dispatch];
}

const [state, dispatch] = myFunction({
  age: 12,
  firstname: 'liridon',
  lastname: 'Rama'
});

console.log(state);

dispatch('age', 28);
console.log(state);
