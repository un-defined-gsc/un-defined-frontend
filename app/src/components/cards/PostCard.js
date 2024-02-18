import CustomTooltip from "@/components/CustomTooltip"
import CustomChip from "@/components/chip"
import { hexToRGBA } from "@/utils/hex-to-rgba"
import { AddReactionOutlined, ChatOutlined, InsertEmoticonOutlined, InsertInvitationOutlined, SpeakerNotesOffOutlined } from "@mui/icons-material"
import { Badge, Box, Card, CardActions, CardContent, CardMedia, Grid, IconButton, Typography } from "@mui/material"
import { useState } from "react"

const PostCard = () => {
    const [isLiked, setIsLiked] = useState(false)
    const [openComment, setOpenComment] = useState(false)

    return (
        <Card>
            <CardMedia component="img" height="200" image="https://via.placeholder.com/800x300" alt="Picture of the card" />
            <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <CustomChip label="Category" color="primary" rounded sx={{ width: 'fit-content' }} />

                <Typography variant="h5" component="div">
                    Hello World
                </Typography>

                <Typography variant="body1" component="div">
                    Welcome to Google Solution Challenge 2024
                </Typography>

                <Box sx={{ display: 'flex', gap: '8px', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box sx={{ display: 'flex', gap: '8px' }}>
                        <CustomTooltip title={isLiked ? "Unlike" : "Like"} placement="bottom" followCursor>
                            <IconButton sx={{ color: isLiked ? 'primary.main' : 'text.primary' }} onClick={() => setIsLiked(!isLiked)}>
                                <Badge
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }}
                                    badgeContent={isLiked ? 3 : 2}
                                >
                                    {
                                        isLiked
                                            ? <InsertEmoticonOutlined />
                                            : <AddReactionOutlined />
                                    }
                                </Badge>
                            </IconButton>
                        </CustomTooltip>

                        <CustomTooltip title={openComment ? "Close Comments" : "Open Comments"} placement="bottom" followCursor>
                            <IconButton sx={{ color: 'text.primary' }} onClick={() => setOpenComment(!openComment)}>
                                {
                                    openComment
                                        ? <ChatOutlined />
                                        : <SpeakerNotesOffOutlined />
                                }

                            </IconButton>
                        </CustomTooltip>
                    </Box>

                    {/* <Box sx={{ width: '100%' }}>
                        <Divider />
                    </Box> */}

                    <Typography variant="caption" sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        saasd

                        <InsertInvitationOutlined />
                    </Typography>
                </Box>
            </CardContent>

            {
                openComment
                    ? <CardActions sx={{ borderTop: theme => `1px solid ${hexToRGBA(theme.palette.border.light, 0.25)}` }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Typography variant="h6">
                                    Comments
                                </Typography>
                            </Grid>

                            <Grid item xs={12}>
                                <Box>
                                    asdasd
                                </Box>
                            </Grid>
                        </Grid>
                    </CardActions>
                    : null
            }
        </Card>
    )
}

export default PostCard