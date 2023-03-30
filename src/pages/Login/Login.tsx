import { FC } from 'react'
import { useAuth } from '../../app/providers/AuthProvider';
import { useInput } from '../../shared/lib/Form/useInput';
import { Button } from '../../shared/ui';
import { FormField } from '../../shared/lib/Form';
import { StyledCreateForm } from '../../shared/layouts';

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
    <StyledCreateForm>
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
    </StyledCreateForm>
  )
};
