import PostCard from "@/components/cards/PostCard";
import Aside from "@/layout/components/Aside";
import { Box, Grid } from "@mui/material";

const Social = () => {
  const settings = {
    showComments: true,
    showLikes: true,
    showReactions: true,
  };
  const data = {
    image: "https://www.ssb.gov.tr/Images/Uploads/MyContents/TY_20170630173853932630.jpg",
    categories: ["Technology"],
    tags: ["Tag 1", "Tag 2", "Tag 3"],
    title: "Title",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    likes: 0,
    isLiked: false,
    date: "2021-10-10T10:10:10",
  };

  return (
    <>
      <Box sx={{ display: "flex", gap: "2rem" }}>
        <Grid
          container
          sx={{
            maxWidth: "800px",
            width: "100%",
          }}
          spacing={2}
        >
          <Grid item xs={12}>
            <PostCard settings={settings} data={data} />
          </Grid>
        </Grid>

        <Aside />
      </Box>
    </>
  );
};
export default Social;
