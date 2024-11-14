type A = { a: number; b: string };
type B = { b: number; c: boolean };

// type Merge<T, U> = T & U;

type Merge<T, U> = {
    [K in keyof T | keyof U]: 
      K extends keyof T // First, check if K exists in T
      ? (K extends keyof U // Now, check if K also exists in U
          ? T[K] // If it exists in both T and U, pick the type from T
          : T[K]) // If it only exists in T, pick the type from T
      : (K extends keyof U // If K does not exist in T, check if it exists in U
          ? U[K] // If it only exists in U, pick the type from U
          : never); // This should never happen, but it's here for completeness
  };

type C = Merge<A, B>;

const s: C = {
  a: 4,
  b: "1",
  c: false,
};

// if(K extends keyof T) {
//     if(K extends keyof U) {
//         return T[K];
//     } else if (K extends keyof U) {
//         return T[U];
//     } else {
//         return T[K];
//     }
// }