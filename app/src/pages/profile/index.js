import Profile from '@/views/profile'

const ProfilePage = () => <Profile priv />

ProfilePage.acl = {
  action: "read",
  subject: "profile-private",
};
export default ProfilePage;