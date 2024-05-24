type Errors = {
  email?: string[];
  firstName?: string[];
  lastName?: string[];
  phone?: string[];
};

type Form = {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  errors: Errors;
};

type Params = Omit<Form, "errors">;

const newForm: Params = {
  email: "test@example.com",
  firstName: "Alex",
  lastName: "Smith",
  phone: "345-48-20",
};

export { newForm };

//   console.log(newForm);
