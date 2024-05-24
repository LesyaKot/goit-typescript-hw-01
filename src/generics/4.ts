type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: User, updates: Partial<User>): User {
  return { ...initialValues, ...updates };
}

const updateUser = createOrUpdateUser(
  {
    name: "Alex",
    surname: "Smith",
    email: "oldmail@mail.com",
    password: "oldpassword",
  },
  {
    email: "user@mail.com",
    password: "password123",
  }
);

export { createOrUpdateUser };

// console.log(updateUser);


//   інший спосіб

// type User = {
//   name: string;
//   surname: string;
//   email: string;
//   password: string;
// };

// function createOrUpdateUser(initialValues: Partial<User>): User {
//   const defaultUser: User = {
//     email: "",
//     password: "",
//     name: "",
//     surname: "",
//   };
//   return { ...defaultUser, ...initialValues };
// }

// const updateUser = createOrUpdateUser({
//   email: "user@mail.com",
//   password: "password123",
// });

// export { createOrUpdateUser };
// console.log(updateUser);
