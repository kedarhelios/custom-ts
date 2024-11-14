interface Vehicle {
  make: string;
  model: string;
  year: number;
  owner: string;
  test: {
    age: number;
    name: string;
  };
}

type MyPartial<T> = {
  [P in keyof T]?: T[P];
};

const asdk: MyPartial<Vehicle> = {
  test: {
    age: 1,
  },
};
