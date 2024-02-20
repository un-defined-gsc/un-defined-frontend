import BlankLayout from "@/layout/BlankLayout";

const Token = () => {
  return (
    <div>Token</div>
  )
}

Token.getLayout = (page) => <BlankLayout>{page}</BlankLayout>;


export default Token

Token.acl = {
  action: "read",
  subject: "social",
};