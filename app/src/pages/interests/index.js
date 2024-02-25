import Interests from "@/views/interests";

const InterestsPage = () => <Interests />

InterestsPage.acl = {
  action: "read",
  subject: "interests",
};
export default InterestsPage;
