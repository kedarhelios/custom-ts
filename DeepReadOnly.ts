interface Person {
  name: string;
  address: {
    street: string;
    city: string;
  };
}

type DeepReadOnly<T> = {
  readonly [P in keyof T]: T[P] extends object ? DeepReadOnly<T[P]> : T[P];
};

const sldfj: DeepReadOnly<Person> = {
  name: "sdf",
  address: {
    city: "sdf",
    street: "sldjk",
  },
};

sldfj.address.city = "sdkjfls";
