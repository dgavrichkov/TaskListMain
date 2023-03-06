import { FC } from 'react'
import { useInput } from '../../hooks/useInput';
import { Button } from '../Button';
import { FormField } from '../elements/FormField';
import { StyledForm } from '../styled/StyledForm';

export const Login: FC = () => {
  const login = useInput({
    initialValue: '',
    validationSettings: { isRequired: true },
  });
  const password = useInput({
    initialValue: '',
    validationSettings: { isRequired: true },
  });

  const handleLogin = async () => {
    try {
      const dataToPost = {
        identifier: login.value,
        password: password.value,
      }
      const response = await fetch('http://localhost:1337/api/auth/local', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataToPost),
      })
      const data = await response.json();
      // TODO set jwt access token to local storage, set user to global store
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <StyledForm>
      <FormField
        id="loginform-login"
        tag='input'
        title='Login'
        state={login}
        type="text"
        placeholder='login'
      />
      <FormField
        id="loginform-password"
        tag='input'
        title='Password'
        state={password}
        placeholder='Password'
      />
      <Button
        buttonType='button'
        onClick={handleLogin}
      >
        Log In
      </Button>
    </StyledForm>
  )
};