import { Avatar } from '@mui/material'

const ProfileAvatar = (props) => {
    return (
        <Avatar
            alt="Avatar"
            style={{ width: "150px", height: "150px" }}
            {...props}
        />
    )
}

export default ProfileAvatar