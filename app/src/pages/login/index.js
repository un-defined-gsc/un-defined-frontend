import {
  Box,
  Button,
  Card,
  CardContent,
  FormControl,
  Grid,
  IconButton,
  TextField,
} from "@mui/material";
import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useRouter } from "next/router";
import { useAuth } from "@/hooks/useAuth";

const { default: BlankLayout } = require("@/layout/BlankLayout");

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { login } = useAuth();

  const handleSubmit = () => {
    login({ email, password });
  };

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

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
              src="/logo.png"
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
                  name="email"
                  label="Email"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  style={{}}
                />
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
                  variant="standard"
                  sx={{
                    border: "none",
                    backgroundColor: "transparent !important",
                    color: "secondary",
                  }}
                  color="secondary"
                  onClick={() => router.push("/register")}
                >
                  Register
                </Button>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit}
                >
                  Login
                </Button>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

Login.guestGuard = true;
Login.getLayout = (page) => <BlankLayout>{page}</BlankLayout>;

export default Login;
