import Interests from "@/views/interests";

const InterestsPage = () => <Interests />

export default InterestsPage;

InterestsPage.acl = {
  action: "read",
  subject: "interests",
};
