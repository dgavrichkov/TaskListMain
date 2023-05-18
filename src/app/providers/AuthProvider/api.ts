type TLoginData = {
  identifier: string;
  password: string;
};

export const loginApi = async (dataToPost: TLoginData) => {
  const response = await fetch(process.env.REACT_APP_API_URL + '/api/auth/local', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dataToPost),
  });
  const data = await response.json();
  return data;
};
