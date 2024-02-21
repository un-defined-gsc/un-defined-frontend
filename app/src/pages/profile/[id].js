import Profile from "@/views/profile"

const ProfilePage = () => <Profile priv={false} />

ProfilePage.acl = {
    action: "read",
    subject: "profile-public",
};
export default ProfilePage