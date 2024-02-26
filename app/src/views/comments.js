import PostCard from "@/components/cards/PostCard";
import CustomTooltip from "@/components/tooltip";
import {
  Box,
  Card,
  CardContent,
  Divider,
  IconButton,
  TextField,
  Typography
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import InputAdornment from "@mui/material/InputAdornment";
import ProfileAvatar from "@/components/images/ProfileAvatar";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostById, getPosts } from "@/store/api/post";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { commentPost } from "@/store/api/comment";

const Comments = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [isLiked, setIsLiked] = useState(false);
  const likes = 0;
  const values = useSelector(getPosts)
  const [comment, setComment] = useState("");

  const settings = {
    showComments: false,
    showLikes: false,
    showReactions: false,
  };

  const id = router.query.id;

  useEffect(() => {
    dispatch(fetchPostById(id));
  }, [id]);

  const addComment = (e) => {
    e.preventDefault();
    dispatch(commentPost({ body: comment, post_id: id }));
  };
   
  
  console.log(values);

  return (
    <>

      <PostCard settings={settings} data={values} />

      <Card
        sx={{
          marginTop: "20px",
        }}
      >
        <CardContent>
          <Typography
            sx={{
              fontWeight: "bold",
            }}
            variant="p"
            component="div"
          >
            3 Comments
          </Typography>
          <Divider
            sx={{
              marginTop: "10px",
              marginBottom: "10px",
              borderWidth: "2px",
            }}
          />

          <Box
            sx={{
              display: "flex",
              gap: "5px",
              flexWrap: "wrap",
              justifyContent: "flex-start",
              alignItems: "end",
            }}
          >
            <TextField
              id="outlined-basic"
              label="Write a comment"
              variant="standard"
              name="comment"
              multiline
              value={values.comment}
              onChange={(e) => setComment(e.target.value)}
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <CustomTooltip title="Send" placement="bottom" followCursor>
                      <IconButton
                        type="submit" 
                        onClick={addComment}
                        sx={{
                          "&:hover": { color: "primary.main" },
                        }}
                      >
                        <SendIcon />
                      </IconButton>
                    </CustomTooltip>
                  </InputAdornment>
                ),
              }}
            />
          </Box>

              {values.comments?.map((item, i) => {
                return (
                  <Box
                    key={i}
                    sx={{
                      display: "flex",
                      gap: "5px",
                      flexWrap: "wrap",
                      justifyContent: "flex-start",
                      alignItems: "end",
                      marginTop: "20px",
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
                        {item.name}
                      </Typography>
                      <Typography variant="p" component="div">
                        {item.body}
                      </Typography>
                    </Box>
                  </Box>
                );
              }
              )}

        </CardContent>
      </Card>
    </>
  );
};

export default Comments;
