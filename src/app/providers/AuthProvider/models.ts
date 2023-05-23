export type TUser = {
  blocked: boolean;
  confirmed: boolean;
  createdAt: string;
  email: string;
  id: number;
  provider: string;
  updatedAt: string;
  username: string;
};

export type TLoginData = {
  login: string;
  password: string;
};

export type TAuthData = {
  isLoading: boolean;
  user: TUser;
  token: string | null;
  login: (data: TLoginData) => void;
  logout: () => void;
};
