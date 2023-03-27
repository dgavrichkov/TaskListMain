import { FC } from 'react'
import { useAuth } from '../../entities';
import { useInput } from '../../hooks/useInput';
import { Button } from '../../shared/ui';
import { FormField } from '../../components/elements/FormField';
import { StyledForm } from '../../components/styled/StyledForm';

export const Login: FC = () => {
  const loginfield = useInput({
    initialValue: '',
    validationSettings: { isRequired: true },
  });
  const passwordfield = useInput({
    initialValue: '',
    validationSettings: { isRequired: true },
  });
  const { login } = useAuth();

  const handleLogin = async () => {
    try {
      // Mock login
      login({ login: loginfield.value, password: passwordfield.value });
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
        state={loginfield}
        type="text"
        placeholder='login'
      />
      <FormField
        id="loginform-password"
        tag='input'
        title='Password'
        state={passwordfield}
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
