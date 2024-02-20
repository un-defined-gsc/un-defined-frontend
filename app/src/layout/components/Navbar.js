import { useAuth } from "@/hooks/useAuth";
import { Facebook, Twitter } from "@mui/icons-material";
import { Avatar, Box, Button, IconButton, Typography } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { useRouter } from "next/router";
const Navbar = () => {
  const { logout } = useAuth();

  const handleSubmit = () => logout();
  const router = useRouter();

  return (
    <Box
      sx={{
        width: "300px",
        maxHeight: "100vh",
        height: "calc(100vh - 80px)",
        py: "40px",
        gap: "16px",
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        backgroundColor: (theme) => theme.palette.background.default,
      }}
    >
      <Box
        sx={{ width: "100%", display: "flex", justifyContent: "flex-start" }}
      >
        <Avatar
          src="https://www.w3schools.com/howto/img_avatar.png"
          alt="Picture of the author"
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
          }}
        />
      </Box>

      <Box>
        <Typography variant="body2">Name</Typography>
        <Typography variant="body1" color="secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
      </Box>

      <Box>
        <IconButton>
          <Twitter />
        </IconButton>

        <IconButton>
          <Facebook />
        </IconButton>
      </Box>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          position: "absolute",
          bottom: "0",
          left: "0",
          right: "0",
          padding: "16px",
          borderTop: "1px solid #E0E0E0",
        }}
      >
        <Button
          variant="standard"
          color="primary"
          onClick={() => router.replace("/profile")}
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-start",
            gap: "8px",
          }}
        >
          <PermIdentityIcon />
          Profile
        </Button>

        <Button
          variant="standard"
          color="error"
          onClick={() => handleSubmit()}
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-start",
            gap: "8px",
          }}
        >
          <LogoutIcon />
          Sign out
        </Button>
      </Box>
    </Box>
  );
};

export default Navbar;
