export type TDummyUser = {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  address: {
    address: string;
    city: string;
    coordinates: {
      lat: number;
      lng: number;
    };
    postalCode: string;
    state: string;
  };
};

export type TLoginData = {
  login: string;
  password: string;
};

export type TAuthData = {
  isLoading: boolean;
  user: TDummyUser;
  token: string | null;
  login: (data: TLoginData) => void;
  logout: () => void;
};
