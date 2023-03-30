import { useAuth } from '../../app/providers/AuthProvider'
import { Spacer } from '../../shared/ui'
import { ProfileInfo } from './ProfileInfo'

export const Profile = () => {
  const {isLoading} = useAuth();

  if(isLoading) {
    return <div className='loader'></div>
  }

  return (
    <section>
      <h2>User Profile</h2>
      <Spacer />
      <div>
        <h3>User Info</h3>
        <Spacer />
        <ProfileInfo />
      </div>
    </section>
  )
}
