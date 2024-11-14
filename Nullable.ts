interface Product {
  id: string;
  price: number;
  name: string;
}

type Nullable<T> = {
  [P in keyof T]: T[P] | null;
};

type NullableProduct = Nullable<Product>;

const asldjf: NullableProduct = {
  id: null,
  name: null,
  price: 41,
};
