interface Car {
  make: number;
  model: string;
  year: number;
  isElectric: boolean;
}

type ChangeProperty<T, K extends keyof T, U> = {
  [P in keyof T]: P extends K ? U : T[P];
};

type ChangeYearToString = ChangeProperty<Car, "year" | "isElectric", string>;
