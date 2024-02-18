import Social from "@/views/social";

const SocialPage = () => <Social />;

SocialPage.acl = {
  action: "read",
  subject: "social",
};
export default SocialPage;
