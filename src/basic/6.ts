interface User {
  name: string;
  age: number;
  email: string;
  address?: Address;
}

interface Address {
  city: string;
  country: string;
}

const mango: User = {
  name: "Mango",
  age: 30,
  email: "john@example.com",
  address: {
    city: "New York",
    country: "USA",
  },
};

const poly = {
  name: "Mango",
  age: 30,
  email: "john@example.com",
};

export {mango, poly};

console.log(mango);
console.log(poly);
