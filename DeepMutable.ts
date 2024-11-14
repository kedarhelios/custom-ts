type ReadonlyObj = {
  readonly a: number;
  readonly b: {
    readonly x: string;
  };
};

type DeepMutable<T> = {
  -readonly [P in keyof T]: T[P] extends object ? DeepMutable<T[P]> : T[P];
};

type MutableObj = DeepMutable<ReadonlyObj>;
