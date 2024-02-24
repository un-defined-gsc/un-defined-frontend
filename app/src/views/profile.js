import { Box, Button, Drawer, Grid, useMediaQuery } from "@mui/material";
import { useEffect, useRef, useState } from "react";
// MUI Imports
import Tab from "@mui/material/Tab";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";
import Typography from "@mui/material/Typography";
// Component Imports
import ProfileCard from "@/components/cards/ProfileCard";
import { TabList } from "@mui/lab";
import PostCard from "@/components/cards/PostCard";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProfile,
  fetchProfileById,
  getProfile,
} from "@/store/api/profile";
import Aside from "@/layout/components/Aside";
import CloseIcon from "@mui/icons-material/Close";
import FilterListIcon from "@mui/icons-material/FilterList";


const Profile = ({ priv = true }) => {
  // ** Hooks
  const router = useRouter();
  const dispatch = useDispatch();

  const settings = {
    showComments: true,
    showLikes: false,
    editPost: priv ? true : false,
  };

  const data = {
    image: "https://via.placeholder.com/800x300",
    categories: "Technology",
    title: "Title",
    description: "Description",
    likes: 0,
    isLiked: false,
    date: "2021-10-10T10:10:10",
  };

  // ** States
  const [tab, setTab] = useState("posts");

  // ** Functions
  const handleChange = (event, newValue) => setTab(newValue);

  // ** store
  const values = useSelector(getProfile);
  const [open, setOpen] = useState(false);
  const arrow = useRef();

  useEffect(() => {
    if (arrow.current) arrow.current.style.bottom = "1rem";

    window.addEventListener("scroll", () => {
      if (window.pageYOffset >= 200) {
        if (arrow.current) arrow.current.style.bottom = "4rem";
      } else {
        if (arrow.current) arrow.current.style.bottom = "1rem";
      }
    });
  }, []);

  useEffect(() => {
    if (router.isReady && !priv) {
      const id = router.query.id || null;

      dispatch(fetchProfileById(id));
      // fetchUser(id)
    } else {
      dispatch(fetchProfile());
      // fetchUser()
    }
  }, [router.isReady]);

  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("lg"));
  const Handletoggle = () => setOpen(!open);

  return (
    <Box sx={{ display: "flex", gap: "2rem" }}>
      <Box
        sx={{
          width: "100%",
          maxWidth: "800px",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <ProfileCard {...values} priv={priv} />

        <TabContext value={tab}>
          <TabList
            centered
            pill="true"
            onChange={handleChange}
            aria-label="customized tabs example"
          >
            <Tab value="posts" label="Posts" />
            <Tab value="liked" label="Liked Posts" />
            <Tab value="comments" label="Comments" />
          </TabList>

          <TabPanel value="posts">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <PostCard settings={settings} data={data} />
              </Grid>

              <Grid item xs={12}>
                <PostCard settings={settings} data={data} />
              </Grid>

              <Grid item xs={12}>
                <PostCard settings={settings} data={data} />
              </Grid>
            </Grid>
          </TabPanel>

          <TabPanel value="liked">
            <Typography>
              Chocolate bar carrot cake candy canes sesame snaps. Cupcake pie
              gummi bears jujubes candy canes. Chupa chups sesame snaps halvah.
            </Typography>
          </TabPanel>

          <TabPanel value="comments">
            <Typography>
              Danish tiramisu jujubes cupcake chocolate bar cake cheesecake
              chupa chups. Macaroon ice cream tootsie roll carrot cake gummi
              bears.
            </Typography>
          </TabPanel>
        </TabContext>
      </Box>

      {isMobile ? null : <Aside />}

      {isMobile ? (
        <Button
          ref={arrow}
          color="primary"
          aria-label="arrows"
          onClick={Handletoggle}
          sx={{
            position: "fixed",
            // bottom: "4rem",
            right: "2rem",
            zIndex: 1000,
            padding: 0,
            width: "2.5rem",
            height: "2.5rem",
            minWidth: "unset ",
            transitionDuration: "500ms",
            transitionProperty: "all",
            transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
            "&:hover": {
              transform:
                "translate(0, -0.25rem) rotate(0) skewX(0) skewY(0) scaleX(1) scaleY(1)",
            },
          }}
        >
          <FilterListIcon />
        </Button>
      ) : null}

      <Drawer
        variant="temporary"
        anchor="right"
        open={isMobile && open}
        onClose={Handletoggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          height: "2%",
        }}
      >
        <Box sx={{ width: 350 }}>
          <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
            <Button color="primary" size="sm" onClick={Handletoggle}>
              <CloseIcon />
            </Button>
          </Box>
          <Aside />
        </Box>
      </Drawer>
    </Box>
  );
};

export default Profile;
