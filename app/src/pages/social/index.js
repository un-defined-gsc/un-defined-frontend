import CustomChip from "@/components/chip"
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material"

const Social = () => {
    return (
        <div>
            <Card>
                <CardMedia component="img" height="200" image="https://via.placeholder.com/800x300" alt="Picture of the card" />
                <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <CustomChip label="Social" color="primary" rounded sx={{ width: 'fit-content' }} />

                    <Typography variant="h5" component="div">
                        Social
                    </Typography>

                    <Typography variant="body1" component="div">
                        Social
                    </Typography>

                    <Box sx={{ display: 'flex', gap: '8px' }}>
                        <Typography variant="caption">
                            saasd
                        </Typography>

                        <Typography variant="caption">
                            qwewq
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
        </div>
    )
}

Social.acl = {
    action: 'read',
    subject: 'social'
}
export default Social