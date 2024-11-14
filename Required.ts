interface Person {
  name?: string;
  age?: number;
  email?: string;
}

type MyRequired<T> = {
  [P in keyof T]-?: T[P];
};

type RequiredPerson = MyRequired<Person>;

const sldf: RequiredPerson = {
  age: 1,
  email: "sldkfj",
  name: "lasdkfj",
};
