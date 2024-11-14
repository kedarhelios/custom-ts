interface Person {
  name: string;
  address: string;
}

type CustomReadOnly<T> = {
  readonly [P in keyof T]: T[P];
};

let aslkdfj: CustomReadOnly<Person> = {
  name: "alsdfasdf",
  address: "sdf",
};

aslkdfj.name = "slkdfl";
