function merge<A extends object, B extends object>(objA: A, objB: B): A & B {
  return Object.assign({}, objA, objB);
}

const merged = merge({ name: "Alex" }, { number: 5 });

merged;
export { merge };

// console.log(merged)
