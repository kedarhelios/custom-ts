interface Student {
  name: string;
  grade: number;
}

type MyType = { 0: string; testing: number };

type AddPrefixProperty<T, U extends string> = {
  [P in keyof T as `${U}_${P extends number
    ? `${number & P}`
    : P extends symbol
    ? `${string & P}`
    : P}`]: T[P];
};

type Added = AddPrefixProperty<MyType, "kedar">;

const mySymbol = Symbol("mySymbol");
type MySymbolObject = { [mySymbol]: string };
type Addeds = AddPrefixProperty<MySymbolObject, "kedar">;

const sddeds: Addeds = {};

const added: Added = {
  kedar_testing: 45,
  kedar_0: "",
};

// symbols case out of syllabus - Kedar
