type RegisterRequestModel = {
  email: string;
  userName: string;
  age: string;
  password: string;
};

type LoginRequestModel = {
  login: string;
  password: string;
  rememberme: boolean;
};

export type { RegisterRequestModel, LoginRequestModel };
