// import Groups2Icon from '@mui/icons-material/Groups2';
import Diversity2Icon from '@mui/icons-material/Diversity2';
import InterestsIcon from '@mui/icons-material/Interests';
import WysiwygIcon from '@mui/icons-material/Wysiwyg';
import { Person } from "@mui/icons-material";

const navigation = [
    {
        path: "/social",
        title: "Social",
        icon: <Diversity2Icon />,
    },
    {
        path: "/interests",
        title: "Interests",
        icon: <InterestsIcon />,
    },
    {
        path: "/profile",
        title: "Profile",
        icon: <Person />,
    },
    {
        path : "/userprofile",
        title : "Posts",
        icon : <WysiwygIcon />
    }
]

export default navigation;