import ClassicDialog from "@/components/dialogs/ClassicDialog";
import IntestForm from "@/components/forms/IntrestForm";
import CustomTooltip from "@/components/tooltip";
import {
  Box,
  Button,
  Divider,
  Grid,
  Grow,
  Typography
} from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';
import InterestCard from "@/components/cards/InterestCard";

const data = [
  {
    id: 1,
    name: "Backend",
    icon: <ArrowForwardIcon />,
    data: [
      {
        name: "Node.js",
        icon: <OpenInNewOutlinedIcon />,
      },
      {
        name: "Go Programming Language asdsad ada sdasd ad a",
        icon: <OpenInNewOutlinedIcon />,
      },
      {
        name: "Redis",
        icon: <OpenInNewOutlinedIcon />,
      },
      {
        name: "Postgres",
        icon: <OpenInNewOutlinedIcon />,
      },
    ],
  },
  {
    id: 2,
    name: "Frontend",
    icon: <ArrowForwardIcon />,
    data: [
      {
        name: "React.js",
        icon: <OpenInNewOutlinedIcon />,
      },
      {
        name: "Vue.js",
        icon: <OpenInNewOutlinedIcon />,
      },
    ],
  },
];

const Interests = () => {

  const [checked, setChecked] = useState(true);
  const [open, setOpen] = useState(false);

    const [values, setValues] = useState({
        title: "",
        subtitle: "",
    });

    

  useEffect(() => {
    setChecked(true);
  }, []);

  const calculateGrowTimeout = (index) => {
    let maxms = 600;
    return maxms / 1 + Math.pow(Math.E, index);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Divider textAlign="left">
            <Typography variant="h4">Choose Your Interests</Typography>
          </Divider>

          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              width: "100%",
              gap: "1rem",
              mt: "1rem",
            }}
          >

            <Button
                variant="contained"
                color="secondary"
                onClick={() => setOpen(true)}
                >
                Add Interest
            </Button>


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
                <IntestForm values={values} setValues={setValues} />
              </ClassicDialog>
          </Box>
        </Grid>

        {data.map((item, i) => (
          <Fragment key={i}>
            <Grid item xs={12} sx={{ mt: "1rem" }}>
              <Typography
                variant="body3"
                sx={{ display: "flex", alignItems: "center", gap: "1rem" }}
              >
                {item.icon}

                {item.name}
              </Typography>
            </Grid>

            {item.data.map((item, index) => (
              <Grow
                in={checked}
                style={{ transformOrigin: "0 0 0" }}
                {...(checked ? { timeout: calculateGrowTimeout(index) } : {})}
                key={index}
              >
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <CustomTooltip title={item.name} placement="top">
                    <InterestCard title={item.name} icon={ <OpenInNewOutlinedIcon />} index = {index} />
                  </CustomTooltip>
                </Grid>
              </Grow>
            ))}
          </Fragment>
        ))}
      </Grid>
    </Box>
  );
};

export default Interests;
