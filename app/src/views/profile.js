import { Box, Button, Card, CardContent, Drawer, Grid, useMediaQuery } from "@mui/material";
import { useEffect, useRef, useState } from "react";
// MUI Imports
import Tab from "@mui/material/Tab";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";
import Typography from "@mui/material/Typography";
// Component Imports
import ProfileCard from "@/components/cards/ProfileCard";
import { TabList } from "@mui/lab";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProfile,
  fetchProfileById,
  getProfile
} from "@/store/api/profile";
import Aside from "@/layout/components/Aside";
import CloseIcon from "@mui/icons-material/Close";
import FilterListIcon from "@mui/icons-material/FilterList";
import ProfileAvatar from "@/components/images/ProfileAvatar";
import { getPosts } from "@/store/api/post";
import PostCard from "@/components/cards/PostCard";

const Profile = ({ priv = true }) => {
  // ** Hooks
  const router = useRouter();
  const dispatch = useDispatch();

  const settings = {
    showComments: true,
    showLikes: false,
    editPost: priv ? true : false,
  };

  // ** States
  const [tab, setTab] = useState("posts");

  // ** Functions
  const handleChange = (event, newValue) => setTab(newValue);

  // ** store
  const values = useSelector(getProfile);
  const data = useSelector(getPosts);
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
    } else {
      dispatch(fetchProfile());
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
        <ProfileCard data={{ ...values.user }} priv={priv} />

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
              {values.posts?.map((item, i) => (
                <Grid item xs={12} key={i}>
                  <PostCard
                    sx={{ width: "100%" }}
                    data={item}
                    settings={{ ...settings, editPost: true, showLikes: true }}
                  />
                </Grid>
              ))}
            </Grid>
          </TabPanel>

          <TabPanel value="liked">
            {/* <Grid container spacing={2}>
              {data.liked.map((item, i) => (
                <Grid item xs={12} key={i}>
                  <PostCard
                    sx={{ width: "100%" }}
                    data={item}
                    settings={{ ...settings,editPost:false, showLikes: true }}
                  />
                </Grid>
              ))}
            </Grid> */}
          </TabPanel>

          <TabPanel value="comments">
            <Typography>
              <Card>
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      gap: "5px",
                      flexWrap: "wrap",
                      justifyContent: "flex-start",
                    }}
                  >
                    <ProfileAvatar
                      style={{
                        width: "50px",
                        height: "50px",
                        marginRight: "0.5rem",
                      }}
                      src="/avatars/14.png"
                    />

                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "5px",
                      }}
                    >
                      <Typography
                        sx={{
                          fontWeight: "bold",
                          color: "primary.main",
                        }}
                        variant="p"
                        component="div"
                      >
                        Angeline Christina
                      </Typography>
                      <Typography variant="p" component="div" sx={{}}>
                        This story is very important for women. I hope to see
                        more stories like this.
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
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
