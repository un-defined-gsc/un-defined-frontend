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
import ProfileAvatar from "@/components/images/ProfileAvatar";

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
    data: [
      {
        image:
          "/Default_Maybe_its_a_job_board_or_a_CV_displayed_on_a_laptop_Th_0.jpg",
        categories: ["Job"],
        tags: ["Job", "Work", "Career", "Opportunity"],
        title: "Find a Job",
        description:
          "Hi everyone, I'm looking for a job, I'm a software engineer, I have 5 years of experience, I'm good at React, Node.js, and MongoDB. I'm looking for a job in the USA, if you have any offers, please let me know. Thank you!",
        likes: 95,
        isLiked: false,
        date: "2024-02-21T10:10:10",
      },
      {
        image:
          "Default_A_photorealistic_image_of_a_microphone_on_a_stage_bath_1.jpg",
        categories: ["Story"],
        tags: ["Strong", "GirlPower", "Life", "Love"],
        title: "My Journey",
        description:
          "Hey, my name is Angeline. I grew up in a small village surrounded by lush green fields and towering mountains. Life there was simple but filled with challenges, especially for girls like me.From a young age, I knew I wanted more than what my village could offer. I dreamt of a life where I could make my own choices and follow my passions.Despite the doubts and limitations placed upon me because of my gender, I refused to let them define me. I worked twice as hard as anyone else, excelling in school and proving that I was just as capable as any boy in the village.When the time came to pursue further education and explore career opportunities, I faced even more resistance. But I was determined to break free from the traditional roles expected of women in my community.With unwavering determination and a thirst for knowledge, I ventured out into the world beyond my village. Along the way, I encountered countless obstacles and setbacks, but each one only fueled my determination to succeed.Now, as I look back on my journey, I realize that every challenge I faced only made me stronger. I stand here today as a testament to the power of resilience and perseverance, ready to inspire others to chase their dreams no matter where they come from or what obstacles they may face.",
        likes: 45,
        isLiked: false,
        date: "2024-02-21T10:10:10",
      },
    ],
    liked: [
      {
        image: "Default_international_space_station_1.jpg",
        categories: ["Story"],
        tags: ["MyStory", "Story", "Life", "Love", "Happiness"],
        title: "My Story",
        description:
          "Olivia was a 10-year-old girl whose dream was always to become a good aerospace engineer and go into space. She had a lot of difficulties when she was little, she was always told that she couldn't do it, that nothing like that would come out of this small town, but she didn't give up. she is now working as a space engineer at NASA. As we always say, never give up, trust yourself!",
        likes: 95,
        isLiked: true,
        date: "2024-02-21T10:10:10",
      },
    ],
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
              {data.data.map((item, i) => (
                <Grid item xs={12} key={i}>
                  <PostCard
                    sx={{ width: "100%" }}
                    data={item}
                    settings={settings}
                  />
                </Grid>
              ))}
            </Grid>
          </TabPanel>

          <TabPanel value="liked">
            <Grid container spacing={2}>
              {data.liked.map((item, i) => (
                <Grid item xs={12} key={i}>
                  <PostCard
                    sx={{ width: "100%" }}
                    data={item}
                    settings={{ ...settings,editPost:false, showLikes: true }}
                  />
                </Grid>
              ))}
            </Grid>
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
