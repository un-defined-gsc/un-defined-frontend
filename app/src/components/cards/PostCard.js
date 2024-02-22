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
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import { Fragment, useState } from "react";
import { showDatetime } from "@/utils/timeOptions";
import PostForm from "../forms/PostForm";
import ClassicDialog from "../dialogs/ClassicDialog";
import TagChip from "../chip/tag";

const PostCard = ({ settings, data }, props) => {
  const [isLiked, setIsLiked] = useState(false);
  const [open, setOpen] = useState(false);
  const { imageProp, tagsProp, categoryProp, contentProp, titleProp } = props;
  const [values, setValues] = useState(props);

  const router = useRouter();

  const {
    showComments = false,
    showLikes = false,
    editPost = false,
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
    <Fragment>
      <Card>
        <CardMedia
          component="img"
          height="300"
          image={image}
          alt="Picture of the card"
        />
        <CardContent
          sx={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
        >
          <Box
            sx={{
              display: "flex",
              gap: "1rem",
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

          <Typography variant="h5" component="div" sx={{ mt: "0.5rem" }}>
            {title}
          </Typography>

          <Typography
            variant="subtitle"
            component="div"
            sx={{
              textAlign: "justify",
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 5,
              WebkitBoxOrient: "vertical",
              whiteSpace: "pre-line",
            }}
          >
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
                  variant="outlined"
                  label={
                    <Typography
                      variant="body1"
                      sx={{ display: "flex", alignItems: "center", gap: "8px" }}
                    >
                      <OpenInNewOutlined />
                      Go to details
                    </Typography>
                  }
                  rounded
                  color="secondary"
                  // skin="light"
                  onClick={() => router.replace("/social/comments/1")}
                />
              ) : null}

              {editPost ? ( // Edit post

                <Button
                  variant="outlined"
                  onClick={() => setOpen(true)}
                  sx={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <OpenInNewOutlined />
                  Edit Post
                </Button>

              ) : null}
            </Box>

            {/* <Box sx={{ width: '100%' }}>
                        <Divider />
                    </Box> */}
          </Box>
        </CardContent>
        <CardActions
          sx={{
            px: "0.5rem",
            pt: 0,
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: "0.5rem",
              flexWrap: "wrap",
              justifyContent: "flex-start",
            }}
          >
            {tags?.length > 0 && Array.isArray(tags)
              ? tags?.map((tag, index) => (
                <TagChip
                  key={index}
                  label={tag}
                />
              ))
              : null}
          </Box>
        </CardActions>
      </Card>

      <ClassicDialog
        open={open}
        setOpen={setOpen}
        actions={
          <Button
            variant="contained"
            color="success"
            onClick={() => setOpen(false)}
          >
            Save
          </Button>
        }
      >
        <PostForm values={values} setValues={setValues} />
      </ClassicDialog>
    </Fragment>
  );
};

export default PostCard;
