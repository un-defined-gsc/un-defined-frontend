import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Avatar
} from "@mui/material";
import { useState } from "react";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ContactMailOutlinedIcon from "@mui/icons-material/ContactMailOutlined";
import RecordVoiceOverOutlinedIcon from "@mui/icons-material/RecordVoiceOverOutlined";
import WcOutlinedIcon from '@mui/icons-material/WcOutlined';
import PostCard from "@/components/cards/PostCard";
import Aside from "@/layout/components/Aside";
const Userprofile = () => {
  const [email, setEmail] = useState("");
  const [first_name, setName] = useState("");
  const [last_name, setSurname] = useState("");
  const [gender, setGender] = useState("");
  const [appeal, setAppeal] = useState("");

  const settings = {
    showComments: true,
    showLikes: false,
    showReactions: false,
  };

  const data = {
    image: "https://via.placeholder.com/800x300",
    categories: ["Category 1"],
    title: "Title",
    description: "Description",
    likes: 0,
    isLiked: false,
    date: "2021-10-10T10:10:10",
  };

  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <Card
        sx={{
          // width: "100%",
          maxWidth: "800px",
        boxShadow : "none !important",
        border : (theme) => `1px solid ${theme.palette.border.light}`,
          // display: "flex",
          // justifyContent: "center",
          // alignItems: "center",
          // flexDirection: "column",
          // margin: "auto",
        }}
      >
        <CardContent
          sx={{ py: "40px !important" }}
          // sx={{
          //   display: "flex",
          //   justifyContent: "center",
          //   alignItems: "center",
          //   flexDirection: "column",
          //   fontSize: "16px",
          // }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: "100%",
                }}
              >
                <Avatar
                  src="https://www.w3schools.com/howto/img_avatar.png"
                  alt="Avatar"
                  style={{ width: "200px", height: "auto" }}
                />
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
                  <PersonOutlineOutlinedIcon/> <b>Full Name:</b> Burak
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
                  <ContactMailOutlinedIcon /> <b>E-mail:</b> burakbicakci14@gmail.com
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
                  <WcOutlinedIcon /> <b>Gender:</b> Male
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
                  <RecordVoiceOverOutlinedIcon /> <b>Appeal:</b> AĞLAMA MEHMET
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          flexDirection: "column",
          fontSize: "16px",
          width: "100%",
          gap: "16px",
          marginTop: "24px",
        }}
      >
        <PostCard settings={settings} data={data} />
        <PostCard settings={settings} data={data} />
        <PostCard settings={settings} data={data} />
      </Box>
    </Box>
    <Aside/>

    </Box>
  );
};

export default Userprofile;
