import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField
} from "@mui/material";
import TagField from "./components/TagField";


const PostForm = ({ values = null, setValues = () => { } }) => {
  //     const [values, setValues] = useState({
  //       image: "",
  //       tags: "",
  //       category: "",
  //       content: "",
  //       title: ""
  //   });

  const handleImage = (e) => {
    setValues({ ...values, image: e.target.files[0] });
  };

  const handleTag = (e) => {
    setValues({ ...values, tags: e.target.value });
  };

  console.log("values", values)

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <TextField
            id="outlined-required"
            name="title"
            label="Title"
            value={values?.title || ""}
            onChange={(e) =>
              setValues({ ...values, title: e.target.value })
            }
          />
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <TextField
            id="outlined-required"
            name="description"
            label="Description"
            multiline
            minRows={2}
            maxRows={8}
            value={values?.description || ""}
            onChange={(e) =>
              setValues({ ...values, description: e.target.value })
            }
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
          <InputLabel id="demo-simple-select-label">
            Category
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Category"
            value={values?.category}
            onChange={(e) =>
              setValues({ ...values, category: e.target.value })
            }
          >
            <MenuItem value={"category1"}>category1</MenuItem>
            <MenuItem value={"category2"}>category2</MenuItem>
            <MenuItem value={"category3"}>category3</MenuItem>
            <MenuItem value={"category4"}>category4</MenuItem>
          </Select>
        </FormControl>
      </Grid> 

       <Grid item xs={12}>
        <TagField setTags={(tag) => setValues({ ...values, tags: tag })} tags={values?.tags} />
      </Grid>
    </Grid>
  );
};

export default PostForm;
