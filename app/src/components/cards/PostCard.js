import CustomTooltip from "@/components/tooltip";
import CustomChip from "@/components/chip";
import {
  AddReactionOutlined,
  InsertEmoticonOutlined,
  InsertInvitationOutlined,
  OpenInNewOutlined,
} from "@mui/icons-material";
import {
  Badge,
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import { showDatetime } from "@/utils/timeOptions";

const PostCard = ({ settings = {}, data = {} }) => {
  const [isLiked, setIsLiked] = useState(false);
  const router = useRouter();

  const {
    showComments = false,
    showLikes = false,
    showReactions = false,
  } = settings;

  const {
    image = "https://via.placeholder.com/800x300",
    categories = null,
    tags = null,
    title,
    description,
    likes,
    isLiked: j,
    date,
  } = data;

  return (
    <Card>
      <CardMedia
        component="img"
        height="300"
        image={image}
        alt="Picture of the card"
      />
      <CardContent
        sx={{ display: "flex", flexDirection: "column", gap: "8px" }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "15px",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {categories?.length > 0 && Array.isArray(categories)
            ? categories?.map((category, index) => (
                <CustomChip
                  key={index}
                  label={category}
                  color="secondary"
                  rounded
                  sx={{ width: "fit-content" }}
                />
              ))
            : null}
          <Typography
            variant="caption"
            sx={{ display: "flex", alignItems: "center", gap: "8px" }}
          >
            {showDatetime(date)}

            <InsertInvitationOutlined />
          </Typography>
        </Box>

        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body1" component="div">
          {description}
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: "8px",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", gap: "8px", alignItems: "center" }}>
            {showLikes ? (
              <CustomTooltip // Show likes
                title={isLiked ? "Unlike" : "Like"}
                placement="bottom"
                followCursor
              >
                <IconButton
                  sx={{ color: isLiked ? "primary.main" : "text.primary" }}
                  onClick={() => setIsLiked(!isLiked)}
                >
                  <Badge
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    badgeContent={isLiked ? likes + 1 : likes}
                  >
                    {isLiked ? (
                      <InsertEmoticonOutlined />
                    ) : (
                      <AddReactionOutlined />
                    )}
                  </Badge>
                </IconButton>
              </CustomTooltip>
            ) : null}

            {showComments ? ( // Show comments
              <CustomChip
                label={
                  <Typography
                    variant="body1"
                    sx={{ display: "flex", alignItems: "center", gap: "8px" }}
                  >
                    <OpenInNewOutlined />
                    Go to Comments
                  </Typography>
                }
                rounded
                color="secondary"
                skin="light"
                onClick={() => router.replace("/social/comments/1")}
              />
            ) : null}
          </Box>

          {/* <Box sx={{ width: '100%' }}>
                        <Divider />
                    </Box> */}
        </Box>
      </CardContent>
      <CardActions>
        <Box
          sx={{
            display: "flex",
            gap: "15px",
            flexWrap: "wrap",
            justifyContent: "flex-start",
          }}
        >
          {tags?.length > 0 && Array.isArray(tags)
            ? tags?.map((tag, index) => (
                <CustomChip
                  key={index}
                  label={tag}
                  color="warning"
                  skin="light"
                  size="small"
                  rounded
                  sx={{ width: "fit-content" }}
                />
              ))
            : null}
        </Box>
      </CardActions>
    </Card>
  );
};

export default PostCard;
