import {
  Box
} from "@mui/material";
import { useState } from "react";
import PostCard from "@/components/cards/PostCard";
import Aside from "@/layout/components/Aside";
const Userprofile = () => {
  const [email, setEmail] = useState("");
  const [first_name, setName] = useState("");
  const [last_name, setSurname] = useState("");
  const [gender, setGender] = useState("");
  const [appeal, setAppeal] = useState("");

  const settings = {
    showComments: true,
    showLikes: false,
    editPost: true,
  };

  const data = {
    image: "https://via.placeholder.com/800x300",
    categories: ["Technology"],
    title: "Title",
    description: "Description",
    likes: 0,
    isLiked: false,
    date: "2021-10-10T10:10:10",
  };

  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
      }}
    >

      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          flexDirection: "column",
          fontSize: "16px",
          width: "100%",
          gap: "16px",
          marginTop: "24px",
        }}
      >
        <PostCard settings={settings} data={data} />
        <PostCard settings={settings} data={data} />
        <PostCard settings={settings} data={data} />
      </Box>
    </Box>
    <Aside/>

    </Box>
  );
};

export default Userprofile;
