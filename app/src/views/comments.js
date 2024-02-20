import PostCard from "@/components/cards/PostCard";
import CustomTooltip from "@/components/tooltip";
import { Badge } from "@mui/base";
import {
  AddReactionOutlined,
  InsertEmoticonOutlined,
} from "@mui/icons-material";
import {
  Avatar,
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

const Comments = () => {
  const [isLiked, setIsLiked] = useState(false);
  const likes = 0;

  const settings = {
    showComments: false,
    showLikes: false,
    showReactions: false,
  };

  const data = {
    image: "https://via.placeholder.com/800x300",
    categories: [
      "Category 1",
    ],
    title: "Title",
    description: "Description",
    likes: 0,
    isLiked: false,
    date: "2021-10-10T10:10:10",
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
            1 Comments
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

          {/* commit page */}
          <Box
            sx={{
              display: "flex",
              gap: "5px",
              flexWrap: "wrap",
              justifyContent: "flex-start",
              marginTop: "30px",
            }}
          >
            <Avatar
              sx={{
                width: "50px",
                height: "50px",
                marginRight: "10px",
                borderRadius: "15px",
              }}
              alt="Remy Sharp"
              src="https://via.placeholder.com/150"
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
                John Doe
              </Typography>
              <Typography
                variant="p"
                component="div"
                sx={{
                  color: "gray",
                  fontSize: "12px",
                }}
              >
                a year ago
              </Typography>
              <Typography
                variant="p"
                component="div"
                sx={{
                  color: "background.default",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>

              <Box>
                <CustomTooltip
                  title={isLiked ? "Unlike" : "Like"}
                  placement="bottom"
                  followCursor
                >
                  <IconButton
                    sx={{
                      color: isLiked ? "primary.main" : "text.primary",
                      marginLeft: "-8px",
                    }}
                    onClick={() => setIsLiked(!isLiked)}
                    size="small"
                  >
                    <Badge
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "left",
                      }}
                      badgeContent={isLiked ? 2 : 1}
                    >
                      {isLiked ? (
                        <InsertEmoticonOutlined />
                      ) : (
                        <AddReactionOutlined />
                      )}
                    </Badge>
                  </IconButton>
                </CustomTooltip>
              </Box>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default Comments;
