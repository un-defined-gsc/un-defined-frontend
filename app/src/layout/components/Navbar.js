import { Facebook, Twitter } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <Box sx={{
      width: '300px', maxHeight: '100vh', height: 'calc(100vh - 80px)',
      py: '40px',
      gap: '16px',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'flex-start' }}>
        <img
          src="https://via.placeholder.com/150"
          alt="Picture of the author"
          style={{
            width: '100px',
            height: '100px',
            borderRadius: '50%',
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
    </Box>
  );
};

export default Navbar;
