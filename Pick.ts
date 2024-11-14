interface User {
  id: string;
  name: string;
  email: string;
  isAdmin: boolean;
}

type Picker<T, K extends keyof T> = {
  [P in K]: T[P];
};

type CustomUser = Picker<User, "email" | "id">;

const customUser: CustomUser = {
  email: "",
  id: "",
};
