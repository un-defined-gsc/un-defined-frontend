import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import { Fragment } from 'react'
import ProfileAvatar from '../images/ProfileAvatar';

const ProfileForm = ({ values = null, setValues = () => { } }) => {

    // const [values, setValues] = useState({
    //     avatar: "",
    //     name: "",
    //     surname: "",
    //     email: "",
    //     gender: "",
    //     appeal: "",
    // });

    return (
        <Fragment>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem', flexDirection: 'column', justifyItems: 'center' }}>
                        <ProfileAvatar src={"/avatars/14.png" || null} />

                        <Button variant="contained" color="info">
                            Change Avatar
                        </Button>
                    </Box>
                </Grid>

                <Grid item xs={12}>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100%",
                            gap: "16px",
                        }}
                    >
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <FormControl fullWidth>
                                    <TextField
                                        id="outlined-required"
                                        name="name"
                                        label="Name"
                                        value={values?.name || ""}
                                        onChange={(e) => setValues({ ...values, name: e.target.value })}
                                    />
                                </FormControl>
                            </Grid>

                            <Grid item xs={12}>
                                <FormControl fullWidth>
                                    <TextField
                                        id="outlined-required"
                                        name="surname"
                                        label="Surname"
                                        value={values?.surname || ""}
                                        onChange={(e) => setValues({ ...values, surname: e.target.value })}
                                    />
                                </FormControl>
                            </Grid>

                            <Grid item xs={12}>
                                <FormControl fullWidth>
                                    <TextField
                                        id="outlined-required"
                                        name="email"
                                        label="Email"
                                        type="email"
                                        value={values?.email || ""}
                                        onChange={(e) => setValues({ ...values, email: e.target.value })}
                                    />
                                </FormControl>
                            </Grid>

                            <Grid item xs={12}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">
                                        Gender
                                    </InputLabel>

                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Gender"
                                        value={"female"}
                                        onChange={(e) => setValues({ ...values, gender: e.target.value })}
                                    >
                                        <MenuItem value={"male"}>Male</MenuItem>
                                        <MenuItem selected value={"female"}>Female</MenuItem>
                                        <MenuItem value={"other"}>Other</MenuItem>
                                        <MenuItem value={"rather-not-say"}>
                                            Rather Not Say
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>

                            <Grid item xs={12}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">
                                        Appeal
                                    </InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Gender"
                                        value={"she"}
                                        onChange={(e) => setValues({ ...values, appeal: e.target.value })}
                                    >
                                        <MenuItem value={"she"}>She/Her</MenuItem>
                                        <MenuItem value={"he"}>He/His</MenuItem>
                                        <MenuItem value={"they"}>They/Their</MenuItem>
                                        <MenuItem value={"rather-not-say"}>
                                            Rather Not Say
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </Fragment>
    )
}

export default ProfileForm