import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  FormControl,
  Grid,
  IconButton,
  TextField
} from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { useAuth } from "@/hooks/useAuth";

const { default: BlankLayout } = require("@/layout/BlankLayout");

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [first_name, setName] = useState("");
  const [last_name, setSurname] = useState("");
  const [gender, setGender] = useState("");
  const [appeal, setAppeal] = useState("");
  const router = useRouter();
  const { register } = useAuth();

  const handleSubmit = () => {
    register({ email, password, first_name, last_name, gender, appeal });
  };



  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleChangeGender = (event) => {
    setGender(event.target.value);
  };

  const handleChangeAppeal = (event) => {
    setAppeal(event.target.value);
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Card
        sx={{
          width: "100%",
          maxWidth: "500px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CardContent>
          <Box>
            <img
              src={"/logo.png"}
              alt="logo"
              style={{
                maxHeight: "200px",
                width: "auto",
                marginBottom: "16px",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                borderRadius: "5px",
              }}
            />
          </Box>
          <Grid
            container
            spacing={3}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid item xs={12}>
              <FormControl fullWidth>
                <TextField
                  id="outlined-required"
                  name="name"
                  label="Name"
                  onChange={(e) => setName(e.target.value)}
                  style={{}}
                />
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl fullWidth>
                <TextField
                  id="outlined-required"
                  name="surname"
                  label="Surname"
                  onChange={(e) => setSurname(e.target.value)}
                  style={{}}
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
                <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={gender}
                  label="Gender"
                  onChange={handleChangeGender}
                >
                  <MenuItem value={"male"}>Male</MenuItem>
                  <MenuItem value={"female"}>Female</MenuItem>
                  <MenuItem value={"other"}>Other</MenuItem>
                  <MenuItem value={"rather-not-say"}>Rather Not Say</MenuItem>
                </Select>
              </FormControl>

              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Appeal</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={appeal}
                  label="Gender"
                  onChange={handleChangeAppeal}
                >
                  <MenuItem value={"she"}>She/Her</MenuItem>
                  <MenuItem value={"he"}>He/His</MenuItem>
                  <MenuItem value={"they"}>They/Their</MenuItem>
                  <MenuItem value={"rather-not-say"}>Rather Not Say</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl fullWidth>
                <TextField
                  id="password"
                  name="password"
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  onChange={(e) => setPassword(e.target.value)}
                  InputProps={{
                    endAdornment: (
                      <IconButton onClick={handleClickShowPassword} edge="end">
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    ),
                  }}
                />
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "24px",
                  marginTop: "16px",
                }}
              >
                <Button
                  fullWidth
                  variant="outlined"
                  sx={{
                    backgroundColor: "transparent !important",
                    color: "secondary",
                  }}
                  color="secondary"
                  onClick={() => router.push("/login")}
                >
                  Login
                </Button>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit}
                >
                  Register
                </Button>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

Register.guestGuard = true;
Register.getLayout = (page) => <BlankLayout>{page}</BlankLayout>;
export default Register;

