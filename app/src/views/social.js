import PostCard from "@/components/cards/PostCard";
import Aside from "@/layout/components/Aside";
import { Box } from "@mui/material";

const Social = () => {
  const settings = {
    showComments: true,
    showLikes: true,
    showReactions: true,
  };
  const data = {
    image: "https://via.placeholder.com/800x300",
    categories: [
      "Category 1"
    ],
    tags: [
      "Tag 1",
      "Tag 2",
      "Tag 3",
    ],
    title: "Title",
    description: "Description",
    likes: 0,
    isLiked: false,
    date: "2021-10-10T10:10:10",
  };

  return (
    <>
      <Box sx={{ display: "flex", gap: "32px" }}>
        <Box
          sx={{
            maxWidth: "800px",
            width: "100%",
          }}
        >
          <PostCard settings={settings} data={data} />
        </Box>

        <Aside />
      </Box>
    </>
  );
};
export default Social;
