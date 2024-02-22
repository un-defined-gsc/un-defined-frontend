import {
  Box,
  Card,
  CardContent,
  FormControl,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";

const Editpost = (data = {}) => {
  const [image, setImage] = useState(null);
  const [tag, setTag] = useState([]);
  const [category, setCategory] = useState("category1");
  const [content, setContent] = useState("Content");
  const [title, setTitle] = useState("Value");

//   const { image, tag = null, category = null, content, title } = data;

  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };

  const handleTag = (e) => {
    setTag(e.target.value);
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: "700px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "16px",
        margin: "auto",
      }}
    >
      <CardContent>
        <h1>Post Edit</h1>

        <Box>
          <Grid
            container
            spacing={4}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid item xs={12}>
              <FormControl
                sx={{
                  width: "100%",
                }}
              >
                <TextField
                  id="outlined-required"
                  name="title"
                  label="Title"
                  value={title}
                  type="text"
                  onChange={(e) => setTitle(e.target.value)}
                  style={{}}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl
                sx={{
                  width: "100%",
                }}
              >
                <TextField
                  id="outlined-required"
                  name="content"
                  label="Content"
                  type="text"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  style={{}}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl
                sx={{
                  width: "100%",
                }}
              >
                <TextField
                  id="outlined-required"
                  name="image"
                  label="Image"
                  type="file"
                  onChange={handleImage}
                  style={{}}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl
                sx={{
                  width: "100%",
                }}
              >
                <Typography variant="h5" color="secondary">
                  Tags
                </Typography>
                <FormGroup
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Tag1"
                    onChange={handleTag}
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Tag2"
                    onChange={handleTag}
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Tag3"
                    onChange={handleTag}
                  />
                </FormGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={category}
                  label="Category"
                  onChange={handleCategory}
                >
                  <MenuItem value={"category1"}>category1</MenuItem>
                  <MenuItem value={"category2"}>category2</MenuItem>
                  <MenuItem value={"category3"}>category3</MenuItem>
                  <MenuItem value={"category4"}>category4</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid />
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
};

Editpost.acl = {
  action: "read",
  subject: "social",
};

export default Editpost;
