import { useAuth } from '../../../entities';
import { Styled } from './styled'

export const ProfileInfo = () => {
  const { user } = useAuth();

  return (
    <Styled.Wrap>
      {user && (
        <>
          <Styled.InfoPanel>
            <Styled.Entry>
              <span>email</span>
              <div>{user.email}</div>
            </Styled.Entry>
            <Styled.Entry>
              <span>phone</span>
              <div>{user.phone}</div>
            </Styled.Entry>
            <Styled.Entry>
              <span>username</span>
              <div>{user.username}</div>
            </Styled.Entry>
            <Styled.Entry>
              <span>password</span>
              <div>{user.password}</div>
            </Styled.Entry>
            <Styled.Entry>
              <span>birthDate</span>
              <div>{user.birthDate}</div>
            </Styled.Entry>
            <Styled.Entry>
              <span>address</span>
              <div>{user.address?.address || 'none'}</div>
            </Styled.Entry>
            <Styled.Entry>
              <span>city</span>
              <div>{user.address?.city || 'none'}</div>
            </Styled.Entry>
          </Styled.InfoPanel>
          <Styled.PersonalPanel>
            <div className='personal__image'>
              <img width={100} height={100} src={user.image} alt="profile" />
            </div>
            <Styled.Entry>
              <span>First name</span>
              <div>{user.firstName}</div>
            </Styled.Entry>
            <Styled.Entry>
              <span>Last name</span>
              <div>{user.lastName}</div>
            </Styled.Entry>
          </Styled.PersonalPanel>
        </>
      )}
    </Styled.Wrap>
  )
}
