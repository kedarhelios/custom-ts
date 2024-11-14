type Example = { a: number; b: string; c: boolean; d: string };

type OmitByType<T, K> = {
  [P in keyof T]: T[P] extends K ? never : T[P];
};

type Result = OmitByType<Example, string>;
