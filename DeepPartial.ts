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

type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

// also checking if the type is initially object or not!
type AdvancedDeepPartial<T> = T extends object
  ? { [K in keyof T]?: AdvancedDeepPartial<T[K]> }
  : T;

const asdk: AdvancedDeepPartial<Vehicle> = {
  test: {
    age: 1,
  },
};
