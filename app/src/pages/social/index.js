import PostCard from "@/components/cards/PostCard"

const Social = () => {
    return (
        <>
            <PostCard />
        </>
    )
}

Social.acl = {
    action: 'read',
    subject: 'social'
}
export default Social