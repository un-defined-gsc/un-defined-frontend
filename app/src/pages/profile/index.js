import Profile from '@/views/profile'

const ProfilePage = () => <Profile />

ProfilePage.acl = {
  action: "read",
  subject: "social",
};
export default ProfilePage;