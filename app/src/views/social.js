import Aside from "@/layout/components/Aside";
import { hexToRGBA } from "@/utils/hex-to-rgba";
import {
  Avatar,
  Box,
  Button,
  Card,
  Drawer,
  Grid,
  useMediaQuery,
} from "@mui/material";
import { Fragment, useEffect, useRef, useState } from "react";
import FilterListIcon from "@mui/icons-material/FilterList";
import CloseIcon from "@mui/icons-material/Close";
import ClassicDialog from "@/components/dialogs/ClassicDialog";
import PostForm from "@/components/forms/PostForm";
import { useDispatch, useSelector } from "react-redux";
import { createPost, fetchPosts, getFilter, getPosts } from "@/store/api/post";
import PostCard from "@/components/cards/PostCard";

const Social = () => {

  // ** Hooks
  const arrow = useRef();
  const dispatch = useDispatch();

  // ** States & Data
  const [values, setValues] = useState(null);
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const data = useSelector(getPosts);
  const filters = useSelector(getFilter);

  const settings = {
    showComments: true,
    showLikes: true,
    showReactions: true,
  };

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
    dispatch(fetchPosts());
  }, [filters]);

  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("mdlg"));
  const Handletoggle = () => setIsOpen(!isOpen);


  const addPost = () => {
    dispatch(createPost(values));
    setOpen(false);
    setValues(null);
  };

  const handleClose = () => {
    setValues(null);
  };

  return (
    <Fragment>
      <Box sx={{ display: "flex", gap: "2rem" }}>
        <Grid
          container
          sx={{
            maxWidth: "800px",
            width: "100%",
          }}
          spacing={2}
        >
          <Card
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              maxHeight: "64px",
              padding: "1rem",
              marginLeft: "1rem",
            }}
          >
            <Avatar
              alt="Remy Sharp"
              src="avatars/14.png"
              sx={{ width: 50, height: 50 }}
            />
            <Button
              onClick={() => setOpen(true)}
              sx={{
                width: "100%",
                height: "80%",
                marginLeft: "1rem",
                textAlign: "left",
                justifyContent: "left",
                textTransform: "none",
                backgroundColor: "inherit !important",
                color: (theme) => theme.palette.border.main,
                border: "1px solid",
                padding: "1rem",
                "&:hover": {
                  backgroundColor: (theme) =>
                    `${hexToRGBA(theme.palette.border.light, 0.2)} !important`,
                },
              }}
            >
              Write a Post
            </Button>
          </Card>

          {data?.length > 0 &&
            data?.map((item, i) => (
              <Grid item xs={12} key={i}>
                <PostCard
                  sx={{ width: "100%" }}
                  data={item}
                  settings={settings}
                />
              </Grid>
            ))}
        </Grid>

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
          open={isMobile && isOpen}
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

        <ClassicDialog
          open={open}
          setOpen={setOpen}
          title="Create a Post"
          handleClose={handleClose}
          actions={
            <Button
              variant="contained"
              color="success"
              onClick={addPost}
            >
              Create
            </Button>
          }
        >
          <PostForm values={values} setValues={setValues} />
        </ClassicDialog>
      </Box>
    </Fragment>
  );
};
export default Social;
