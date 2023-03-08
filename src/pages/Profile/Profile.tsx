import { Spacer } from '../../shared/ui'
import { ProfileInfo } from './ProfileInfo'

export const Profile = () => {
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
