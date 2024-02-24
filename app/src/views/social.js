import PostCard from "@/components/cards/PostCard";
import Aside from "@/layout/components/Aside";
import { hexToRGBA } from "@/utils/hex-to-rgba";
import {
  Avatar,
  Box,
  Button,
  Card,
  Divider,
  Drawer,
  Grid,
  useMediaQuery
} from "@mui/material";
import { Fragment, useEffect, useRef, useState } from "react";
import FilterListIcon from "@mui/icons-material/FilterList";
import CloseIcon from "@mui/icons-material/Close";
import ClassicDialog from "@/components/dialogs/ClassicDialog";
import PostForm from "@/components/forms/PostForm";

const Social = (props) => {
  const arrow = useRef();

  useEffect(() => {
  
    if (arrow.current) arrow.current.style.bottom = '1rem'
    
    window.addEventListener('scroll',() => {
      if (window.pageYOffset >= 200) {
        if (arrow.current) arrow.current.style.bottom = '4rem'  ;
      } else {
        if (arrow.current) arrow.current.style.bottom = '1rem'
      }
    });
  }, []);

  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  
  const settings = {
    showComments: true,
    showLikes: true,
    showReactions: true,
  };
  const data = {
    image:
      "https://www.ssb.gov.tr/Images/Uploads/MyContents/TY_20170630173853932630.jpg",
    categories: ["Technology"],
    tags: ["Tag 1", "Tag 2", "Tag 3"],
    title: "Title",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    likes: 0,
    isLiked: false,
    date: "2021-10-10T10:10:10",
  };

  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("mdlg"));
  const Handletoggle = () => setIsOpen(!isOpen);

  const [values, setValues] = useState(props);

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
              height: "4%",
              padding: "1rem",
              marginLeft: "1rem",
            }}
          >
            <Avatar
              alt="Remy Sharp"
              src="https://www.ssb.gov.tr/Images/Uploads/MyContents/TY_20170630173853932630.jpg"
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

          <Divider
            sx={{
              width: "100%",
              margin: "1rem 0",
              marginLeft: "1rem",
            }}
          />
          <Grid item xs={12}>
            <PostCard settings={settings} data={data} />
          </Grid>

          <Grid item xs={12}>
            <PostCard settings={settings} data={data} />
          </Grid>
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
        

      </Box>
    </Fragment>
  );
};
export default Social;
