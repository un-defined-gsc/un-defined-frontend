import Comments from "@/views/comments";

const CommentsPage = () => <Comments />;

CommentsPage.acl = {
  action: "read",
  subject: "social-comments",
};

export default CommentsPage;
