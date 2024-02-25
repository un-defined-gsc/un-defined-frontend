import PostCard from "@/components/cards/PostCard";
import CustomTooltip from "@/components/tooltip";
import {
  Box,
  Card,
  CardContent,
  Divider,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import InputAdornment from "@mui/material/InputAdornment";
import ProfileAvatar from "@/components/images/ProfileAvatar";

const Comments = () => {
  const [isLiked, setIsLiked] = useState(false);
  const likes = 0;

  const settings = {
    showComments: false,
    showLikes: false,
    showReactions: false,
  };

  const data = {
    image:"/Default_international_space_station_1.jpg",
    categories: ["Story"],
    title: "My Story",
    description:
      "Olivia was a 10-year-old girl whose dream was always to become a good aerospace engineer and go into space. She had a lot of difficulties when she was little, she was always told that she couldn't do it, that nothing like that would come out of this small town, but she didn't give up. she is now working as a space engineer at NASA. As we always say, never give up, trust yourself!",
    isLiked: false,
    date: "2024-02-21T10:10:10",
  };

  return (
    <>
      <PostCard settings={settings} data={data} />

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
              multiline
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <CustomTooltip title="Send" placement="bottom" followCursor>
                      <IconButton
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

          <Box
            sx={{
              display: "flex",
              gap: "5px",
              flexWrap: "wrap",
              justifyContent: "flex-start",
              marginTop: "30px",
            }}
          >
            <ProfileAvatar
              style={{
                width: "50px",
                height: "50px",
                marginRight: "0.5rem",
              }}
              src="/avatars/6.png"
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
                Ashley Smith
              </Typography>
              <Typography variant="p" component="div" sx={{}}>
                That is girl power!
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "5px",
              flexWrap: "wrap",
              justifyContent: "flex-start",
              marginTop: "30px",
            }}
          >
            <ProfileAvatar
              style={{
                width: "50px",
                height: "50px",
                marginRight: "0.5rem",
              }}
              src="/avatars/31.png"
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
                Phoebe  Duffay
              </Typography>
              <Typography variant="p" component="div" sx={{}}>
                This story is so inspiring. I love it! I hope to be like her one day.
              </Typography>
            </Box>
            
          </Box>

          <Box
            sx={{
              display: "flex",
              gap: "5px",
              flexWrap: "wrap",
              justifyContent: "flex-start",
              marginTop: "30px",
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
                This story is very important for women. I hope to see more stories like this.
              </Typography>
            </Box>
            
          </Box>

        </CardContent>
      </Card>
    </>
  );
};

export default Comments;
