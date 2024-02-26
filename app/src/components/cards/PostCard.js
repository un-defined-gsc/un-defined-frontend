import CustomTooltip from "@/components/tooltip";
import CustomChip from "@/components/chip";
import {
  AddReactionOutlined,
  InsertEmoticonOutlined,
  InsertInvitationOutlined,
  OpenInNewOutlined
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
  Typography
} from "@mui/material";
import { useRouter } from "next/router";
import { Fragment, useState } from "react";
import TagChip from "../chip/tag";
import CategoryChip from "../chip/category";
import ClassicDialog from "../dialogs/ClassicDialog";
import PostForm from "../forms/PostForm";
import { useDispatch } from "react-redux";
import { updatePost } from "@/store/api/post";
import { showDatetime } from "@/utils/timeOptions";

const PostCard = ({ settings, data }) => {
  const [isLiked, setIsLiked] = useState(data.isLiked);
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState(data);

  const router = useRouter();
  const dispatch = useDispatch();

  const {
    showComments = false,
    showLikes = false,
    editPost = false,
  } = settings;

  const {
    image = "https://via.placeholder.com/800x300",
    category = null,
    tags = null,
    title,
    content,
    likes,
    isLiked: j,
    date,
    created_at
  } = data;

  const handleUpdate = () => {
    dispatch(updatePost(values)).then(() => { setOpen(false) });
  }

  showDatetime(created_at, { y: true, m: true, d: true, h: true, m: true });

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
            <CategoryChip
              label={category}
              isActive={true}
              info
            />

            <Typography
              variant="caption"
              sx={{ display: "flex", alignItems: "center", gap: "8px" }}
            >
              {showDatetime(created_at, { y: true, m: true, d: true, h: true, m: true })}
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
            {content}
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
                  onClick={() => router.replace(`/social/comments/${data.id}`)}
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
                  label={tag.tag}
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
            onClick={() => handleUpdate()}
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
