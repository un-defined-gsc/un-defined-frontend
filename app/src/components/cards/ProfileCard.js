import { Fragment, useState } from "react";
import {
    Box,
    Card,
    CardContent,
    Typography,
    Grid,
    Button
} from "@mui/material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ContactMailOutlinedIcon from "@mui/icons-material/ContactMailOutlined";
import RecordVoiceOverOutlinedIcon from "@mui/icons-material/RecordVoiceOverOutlined";
import WcOutlinedIcon from '@mui/icons-material/WcOutlined';
import { ModeEditOutline } from "@mui/icons-material";
import ClassicDialog from "../dialogs/ClassicDialog";
import ProfileForm from "../forms/ProfileForm";
import ProfileAvatar from "../images/ProfileAvatar";

const ProfileCard = (props) => {

    const [open, setOpen] = useState(false);
    const [values, setValues] = useState(props)

    const {
        avatar,
        name,
        surname,
        email,
        gender,
        appeal,
        priv
    } = props;

    return (
        <Fragment>
            <Card
                sx={{
                    maxWidth: "800px",
                    boxShadow: "none !important",
                    border: (theme) => `1px solid ${theme.palette.border.light}`,
                }}
            >
                <CardContent sx={{ py: "40px !important" }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={5}>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    flexDirection: "column",
                                    gap: "1rem",
                                    width: "100%",
                                    height: "100%",
                                }}
                            >
                                <ProfileAvatar src={avatar || null} />

                                {
                                    priv
                                        ? <Button
                                            variant="contained"
                                            size="small"
                                            color="warning"
                                            sx={{ maxWidth: 'fit-content', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                                            onClick={() => setOpen(true)}
                                        >
                                            <ModeEditOutline fontSize="small" /> Edit Profile
                                        </Button>
                                        : null
                                }
                            </Box>

                        </Grid>

                        <Grid item container xs={12} md={7} spacing={2}>
                            <Grid item xs={12} sx={{ display: "flex", alignItems: "center" }}>
                                <Typography
                                    sx={{
                                        display: "flex",
                                        gap: "8px",
                                        alignItems: "center",
                                    }}
                                    variant="body2"
                                    color="secondary"
                                >
                                    <PersonOutlineOutlinedIcon /> <b>Full Name:</b> {name} {surname}
                                </Typography>
                            </Grid>

                            <Grid item xs={12} sx={{ display: "flex", alignItems: "center" }}>
                                <Typography
                                    sx={{
                                        display: "flex",
                                        gap: "8px",
                                        alignItems: "center",
                                    }}
                                    variant="body2"
                                    color="secondary"
                                >
                                    <ContactMailOutlinedIcon /> <b>E-mail:</b> {email}
                                </Typography>
                            </Grid>

                            <Grid item xs={12} sx={{ display: "flex", alignItems: "center" }}>
                                <Typography
                                    sx={{
                                        display: "flex",
                                        gap: "8px",
                                        alignItems: "center",
                                    }}
                                    variant="body2"
                                    color="secondary"
                                >
                                    <WcOutlinedIcon /> <b>Gender:</b> {gender}
                                </Typography>
                            </Grid>

                            <Grid item xs={12} sx={{ display: "flex", alignItems: "center" }}>
                                <Typography
                                    sx={{
                                        display: "flex",
                                        gap: "8px",
                                        alignItems: "center",
                                    }}
                                    variant="body2"
                                    color="secondary"
                                >
                                    <RecordVoiceOverOutlinedIcon /> <b>Appeal:</b> {appeal}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>

            {
                priv
                    ? <ClassicDialog
                        open={priv && open}
                        setOpen={setOpen}
                        title={<Box>
                            Change <b>{name} {surname}</b>'s Profile Informations
                        </Box>}
                        subtitle=""
                        actions={
                            <Button
                                variant="contained"
                                color="success"
                                onClick={() => router.push("/login")}
                            >
                                Save
                            </Button>
                        }
                    >
                        <ProfileForm
                            values={values}
                            setValues={setValues}
                        />
                    </ClassicDialog>
                    : null
            }
        </Fragment>
    )
}

export default ProfileCard