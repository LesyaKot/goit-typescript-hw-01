const age: number = 50;
const username: string = "Max";
const toggle: boolean = true;
const empty: null = null;

const callback: (a: number) => number = (a) => {
  return 100 + a;
};

export { age, username, toggle, empty, callback };

console.log( age);
console.log( username);
console.log( toggle);
console.log( empty);
console.log( callback(25));