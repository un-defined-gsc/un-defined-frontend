import { Tag } from '@mui/icons-material'
import CustomChip from '.'

const TagChip = ({ label, onDelete }) => {
    return <CustomChip
        variant="contained"
        skin="light"
        color="warning"
        rounded
        label={label}
        onDelete={onDelete}
        icon={<Tag />}
        sx={{ width: 'fit-content' }}
        size="small"
    />
}

export default TagChip