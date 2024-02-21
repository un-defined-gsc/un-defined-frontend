import { useAuth } from "@/hooks/useAuth";
import { Facebook, Twitter } from "@mui/icons-material";
import { Box, Button, Divider, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { useRouter } from "next/router";
import navigation from "@/navigation";
import { hexToRGBA } from "@/utils/hex-to-rgba";
import ProfileAvatar from "@/components/images/ProfileAvatar";
const Navbar = () => {
  const { logout } = useAuth();

  const handleSubmit = () => logout();
  const router = useRouter();

  const handleLocate = (p) => { if (p) return () => router.replace(p) }

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
        <ProfileAvatar src="https://www.w3schools.com/howto/img_avatar.png" />
      </Box>

      <Box>
        <Typography variant="body2">Name</Typography>
        <Typography variant="body1" color="secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
      </Box>

      <List
        sx={{
          display: 'flex',
          gap: '0.5rem',
          flexDirection: 'column',
          pt: 0
        }}
        component="nav"
      >
        {
          navigation.map((item, index) => (
            <ListItemButton
              key={index}
              variant="standard"
              onClick={handleLocate(item.path)}
              sx={{
                '&:hover': {
                  transform: "translateX(5px)",
                  transition: "all 300ms ease-in-out",
                },
                '&:not(:hover)': {
                  transform: "translateX(0)",
                  transition: "all 300ms ease-in-out",
                },
                backgroundColor: theme => router.pathname == item.path && hexToRGBA(theme.palette["secondary"].main, 0.12)
              }}
            >
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>

              <ListItemText primary={item.title} />
            </ListItemButton>
          ))
        }
      </List>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          position: "absolute",
          bottom: 0,
          left: 0,
          py: "16px",
        }}
      >

        <Box sx={{ px: '0.5rem' }}>
          <IconButton sx={{ '&:hover': { color: theme => theme.palette.primary.main } }}>
            <Twitter />
          </IconButton>

          <IconButton sx={{ '&:hover': { color: theme => theme.palette.primary.main } }}>
            <Facebook />
          </IconButton>
        </Box>

        <Box>
          <Divider />
        </Box>

        <Button
          variant="standard"
          color="error"
          onClick={() => handleSubmit()}
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-start",
            gap: "8px",

            '&:hover': {
              color: theme => theme.palette.error.main
            }
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
