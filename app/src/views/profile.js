import {
    Box,
    Card,
    CardContent,
    Typography,
    Grid,
    TextField,
    Button,
  } from "@mui/material";
  import { useState } from "react";
  import Select from "@mui/material/Select";
  import InputLabel from "@mui/material/InputLabel";
  import MenuItem from "@mui/material/MenuItem";
  import FormControl from "@mui/material/FormControl";
  
  const Profile = () => {
    const [email, setEmail] = useState("");
    const [first_name, setName] = useState("");
    const [last_name, setSurname] = useState("");
    const [gender, setGender] = useState("");
    const [appeal, setAppeal] = useState("");
  
    const handleChangeGender = (event) => {
      setGender(event.target.value);
    };
  
    const handleChangeAppeal = (event) => {
      setAppeal(event.target.value);
    };
  
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "90vh",
          gap: "16px",
        }}
      >
        <Card
          sx={{
            width: "100%",
            maxWidth: "1000px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <CardContent
              sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
           margin : "24px",
              }}
          >
            <Grid container spacing={3}>
              <Grid item xs={12} md={3}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "64px",
                  }}
                >
                  <img
                    src="https://www.w3schools.com/howto/img_avatar.png"
                    alt="Avatar"
                    style={{ width: "100px", height: "100px" }}
                  />
                  <Typography variant="body2">Name</Typography>
                  <Typography variant="body2">Surname</Typography>
                </Box>
              </Grid>
  
              {/* dikey düz çizgi */}
              <Grid item xs={12} md={2}>
                <Box
                  sx={{
                    borderLeft: "2px solid ",
                    height: "100%",
                    width: "100%",
                  }}
                ></Box>
              </Grid>
  
              <Grid item xs={12} md={6}>
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
                          value="Burak"
                          onChange={(e) => setName(e.target.value)}
                        />
                      </FormControl>
                    </Grid>
  
                    <Grid item xs={12}>
                      <FormControl fullWidth>
                        <TextField
                          id="outlined-required"
                          name="surname"
                          label="Surname"
                          value="Bıçakcıoğlu"
                          onChange={(e) => setSurname(e.target.value)}
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
                          value="deneme@gmail.com"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </FormControl>
                    </Grid>
  
                    <Grid
                      item
                      xs={12}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "24px",
                      }}
                    >
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Gender
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value="male"
                          label="Gender"
                          onChange={handleChangeGender}
                        >
                          <MenuItem value={"male"}>Male</MenuItem>
                          <MenuItem value={"female"}>Female</MenuItem>
                          <MenuItem value={"other"}>Other</MenuItem>
                          <MenuItem value={"rather-not-say"}>
                            Rather Not Say
                          </MenuItem>
                        </Select>
                      </FormControl>
  
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Appeal
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value="he"
                          label="Gender"
                          onChange={handleChangeAppeal}
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
  
                    <Grid item xs={12}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Button
                          fullWidth
                          variant="contained"
                          color="secondary"
                          onClick={() => router.push("/login")}
                          sx={{
                            width: "100%",
                            // width: "50%",
                          }}
                        >
                          Save
                        </Button>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
    );
  };
  
  export default Profile;
  