import {
    FormControl,
    Grid,
    TextField
  } from "@mui/material";
  
  
  const IntestForm = ({ values = null, setValues = () => { } }) => {
    //     const [values, setValues] = useState({
    //       title: ""
    //       subtitle: "",
    //   });

    return (
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <TextField
              id="outlined-required"
              name="title"
              label="Title"
              value={values?.title || ""}
              type="text"
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
              name="subtitle"
              label="Subtitle"
              multiline
              type="text"
              value={values?.Subtitle || ""}
              onChange={(e) =>
                setValues({ ...values, Subtitle: e.target.value })
              }
            />
          </FormControl>
        </Grid>
       

      </Grid>
    );
  };
  
  export default IntestForm;
  