interface Vehicle {
  make: string;
  model: string;
  year: number;
  owner: string;
}

type Omitter<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P];
};

type VehicleNew = Omitter<Vehicle, "make" | "model" | "owner">;

const sldfjk: VehicleNew = {
  year: 654,
};
