export interface User {
  email: string;
  token: string;
  username: string;
  bio: string;
  image: string;
  age: number;
}

export type UserRegisterDTO = Pick<User, 'username' | 'email'> & { password: string };
