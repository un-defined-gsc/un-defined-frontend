import {
  FormControl,
  Grid,
  TextField
} from "@mui/material";

/**
 * 
 * @param {
 *  title: string
 * } values
 * 
 * @returns 
 */

const InterestCategoryForm = ({ values = null, setValues = () => { } }) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <TextField
            id="outlined-required"
            name="title"
            label="Category Name"
            value={values?.title || ""}
            type="text"
            onChange={(e) =>
              setValues({ ...values, title: e.target.value })
            }
          />
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default InterestCategoryForm;
