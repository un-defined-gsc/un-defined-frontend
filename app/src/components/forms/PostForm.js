import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField
} from "@mui/material";
import TagField from "./components/TagField";

const PostForm = ({ values = null, setValues = () => {} }) => {

  const handleImage = (e) => {
    setValues({ ...values, image: e.target.value });
  };

  console.log("values", values);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <TextField
            id="outlined-required"
            name="title"
            label="Title"
            value={values?.title || ""}
            onChange={(e) => setValues({ ...values, title: e.target.value })}
          />
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <TextField
            id="outlined-required"
            name="content"
            label="content"
            multiline
            minRows={2}
            maxRows={8}
            value={values?.content || ""}
            onChange={(e) => setValues({ ...values, content: e.target.value })}
          />
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <TextField
            id="outlined-required"
            name="image"
            label="Image"
            value={values?.image || ""}
            onChange={handleImage}
          />
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Category"
            value={values?.category || ""}
            onChange={(e) => setValues({ ...values, category: e.target.value })}
          >
            <MenuItem value={"jobadvert"}>Job</MenuItem>
            <MenuItem value={"question"}>Question</MenuItem>
            <MenuItem value={"problem"}>Problem</MenuItem>
            <MenuItem value={"story"}>Story</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={12}>
        <TagField
          setTags={(tag) => setValues({ ...values, tags: tag })}
          tags={values?.tags}
        />
      </Grid>

    </Grid>
  );
};

export default PostForm;
