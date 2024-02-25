import {
  FormControl,
  Grid,
  TextField
} from "@mui/material";


const RoadmapForm = ({ values = null, setValues = () => { } }) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <TextField
            id="outlined-required"
            name="name"
            label="Name"
            value={values?.name || ""}
            onChange={(e) =>
              setValues({ ...values, name: e.target.value })
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
    </Grid>
  );
};

export default RoadmapForm;
