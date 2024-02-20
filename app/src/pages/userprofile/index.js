import Userprofile from "@/views/userprofile";

const UserprofilePage = () => <Userprofile />;

UserprofilePage.acl = {
  action: "read",
  subject: "social",
};
export default UserprofilePage;