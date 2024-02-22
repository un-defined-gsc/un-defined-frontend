import { Box, Grid } from "@mui/material";
import { useEffect, useState } from "react";

// MUI Imports
import Tab from '@mui/material/Tab'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import Typography from '@mui/material/Typography'

// Component Imports
import ProfileCard from "@/components/cards/ProfileCard";
import { TabList } from "@mui/lab";
import PostCard from "@/components/cards/PostCard";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile, fetchProfileById, getProfile } from "@/store/api/profile";
import Aside from "@/layout/components/Aside";

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
    categories: ["Technology"],
    title: "Title",
    description: "Description",
    likes: 0,
    isLiked: false,
    date: "2021-10-10T10:10:10",
  };

  // ** States
  const [tab, setTab] = useState('posts')

  // ** Functions
  const handleChange = (event, newValue) => setTab(newValue)

  // ** store
  const values = useSelector(getProfile);

  useEffect(() => {
    if (router.isReady && !priv) {
      const id = router.query.id || null

      console.log("wqeqwe", id);
      dispatch(fetchProfileById(id))
      // fetchUser(id)
    } else {
      dispatch(fetchProfile())
      // fetchUser()
    }
  }, [router.isReady])

  return (
    <Box sx={{ display: "flex", gap: "2rem" }}>
      <Box sx={{
        width: '100%',
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        gap: '1rem'
      }}>
        <ProfileCard {...values} priv={priv} />

        <TabContext value={tab}>
          <TabList centered pill='true' onChange={handleChange} aria-label='customized tabs example'>
            <Tab value='posts' label='Posts' />
            <Tab value='liked' label='Liked Posts' />
            <Tab value='comments' label='Comments' />
          </TabList>

          <TabPanel value='posts'>
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

          <TabPanel value='liked'>
            <Typography>
              Chocolate bar carrot cake candy canes sesame snaps. Cupcake pie gummi bears jujubes candy canes. Chupa chups
              sesame snaps halvah.
            </Typography>
          </TabPanel>

          <TabPanel value='comments'>
            <Typography>
              Danish tiramisu jujubes cupcake chocolate bar cake cheesecake chupa chups. Macaroon ice cream tootsie roll
              carrot cake gummi bears.
            </Typography>
          </TabPanel>
        </TabContext>
      </Box>

      <Aside />
    </Box>
  );
};

export default Profile;
