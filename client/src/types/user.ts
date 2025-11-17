export type User = {
  id: string;
  userName: string;
  email: string;
  token: string;
  imageUrl?: string;
}

export type LoginCreds = {
  email: string;
  password: string;
}

export type RegisterCreds = {
  email: string;
  userName: string;
  password: string;
}
