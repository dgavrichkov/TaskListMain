import { Styled } from './styled'

export const ProfileInfo = () => {
  return (
    <Styled.Wrap>
      <Styled.InfoPanel>
        <div>email</div>
        <div>phone</div>
        <div>username</div>
        <div>password</div>
        <div>birthDate</div>
        <div>address</div>
        <div>city</div>
      </Styled.InfoPanel>
      <Styled.PersonalPanel>
        <div>image</div>
        <div>First name</div>
        <div>Last name</div>
        <div>age</div>
        <div>Gender</div>
      </Styled.PersonalPanel>
    </Styled.Wrap>
  )
}
