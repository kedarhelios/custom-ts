type Nested = {
  a: { b: { c: string } };
  d: number;
};

// type Flatten<T> = {
//   [P in keyof T]: T[P] extends object ? T[P][] : T[P];
// };

type Result = Flatten<Nested>;

type Flatten<T, Prefix extends string = ''> = T extends object
  ? { [K in keyof T]: Flatten<T[K], `${Prefix}${K & string}` extends '' ? `${K & string}` : `${Prefix}${K & string}` }[keyof T]
  : T;

//   out of syllabus - KedarVyas