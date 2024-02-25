import PostCard from "@/components/cards/PostCard";
import Aside from "@/layout/components/Aside";
import { hexToRGBA } from "@/utils/hex-to-rgba";
import {
  Avatar,
  Box,
  Button,
  Card,
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
    if (arrow.current) arrow.current.style.bottom = "1rem";

    window.addEventListener("scroll", () => {
      if (window.pageYOffset >= 200) {
        if (arrow.current) arrow.current.style.bottom = "4rem";
      } else {
        if (arrow.current) arrow.current.style.bottom = "1rem";
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
    data: [
      {
        image:"Default_international_space_station_1.jpg",
        categories: ["Story"],
        tags: ["MyStory", "Story", "Life", "Love", "Happiness"],
        title: "My Story",
        description:
          "Olivia was a 10-year-old girl whose dream was always to become a good aerospace engineer and go into space. She had a lot of difficulties when she was little, she was always told that she couldn't do it, that nothing like that would come out of this small town, but she didn't give up. she is now working as a space engineer at NASA. As we always say, never give up, trust yourself!",
        likes: 95,
        isLiked: false,
        date: "2024-02-21T10:10:10",
      },
      {
        image:
          "Default_A_photorealistic_image_of_a_microphone_on_a_stage_bath_1.jpg",
        categories: ["Story"],
        tags: ["Strong", "GirlPower", "Life", "Love"],
        title: "My Journey",
        description:
          "Hey, my name is Angeline. I grew up in a small village surrounded by lush green fields and towering mountains. Life there was simple but filled with challenges, especially for girls like me.From a young age, I knew I wanted more than what my village could offer. I dreamt of a life where I could make my own choices and follow my passions.Despite the doubts and limitations placed upon me because of my gender, I refused to let them define me. I worked twice as hard as anyone else, excelling in school and proving that I was just as capable as any boy in the village.When the time came to pursue further education and explore career opportunities, I faced even more resistance. But I was determined to break free from the traditional roles expected of women in my community.With unwavering determination and a thirst for knowledge, I ventured out into the world beyond my village. Along the way, I encountered countless obstacles and setbacks, but each one only fueled my determination to succeed.Now, as I look back on my journey, I realize that every challenge I faced only made me stronger. I stand here today as a testament to the power of resilience and perseverance, ready to inspire others to chase their dreams no matter where they come from or what obstacles they may face.",
        likes: 45,
        isLiked: false,
        date: "2024-02-21T10:10:10",
      },
      {
        image: "Default_an_image_depicting_a_scene_with_a_question_mark_in_th_1.jpg",
        categories: ["Question"],
        tags: ["Question", "Help"],
        title: "Question",
        description:
          "Hello girls, I love my current job, but a better offer came from the next company, they give me 3 times the money I earn, but I don't know what I have to do, can you help me?",
        likes: 10,
        isLiked: false,
        date: "2024-02-21T10:10:10",
      },
    ],
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

          {data.data.map((item, i) => (
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
