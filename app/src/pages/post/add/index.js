import Postadd from '@/views/postadd'

const AddPostPage = () => <Postadd/>

AddPostPage.acl = {
    action: "read",
    subject: "social",
};

export default AddPostPage