import { useAuth } from "@/hooks/useAuth";
import { Facebook, Twitter } from "@mui/icons-material";
import { Box, Button, IconButton, Typography } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
const Navbar = () => {
  const { logout } = useAuth();

  const handleSubmit = () => logout();

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
        position : "relative"
      }}
    >
      <Box
        sx={{ width: "100%", display: "flex", justifyContent: "flex-start" }}
      >
        <img
          src="https://via.placeholder.com/150"
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
          display: "flex",
          width: "100%",
          position: "absolute",
          bottom: "40px",
        }}
      >
        <Button
          variant="standard"
          color="error"
          onClick={() => handleSubmit()}
          sx={{ width: "100%",
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
