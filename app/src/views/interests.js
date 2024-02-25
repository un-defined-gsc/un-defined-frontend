import ClassicDialog from "@/components/dialogs/ClassicDialog";
import InterestForm from "@/components/forms/InterestForm";
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
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import Can from "@/layout/components/acl/Can";
import InterestCategoryForm from "@/components/forms/InterestCategoryForm";

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
  const [openCategory, setOpenCategory] = useState(false);
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
    <Fragment>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Grid container spacing={2}>
          <Can I="read" a="admin-options">
            <Grid item xs={12} sx={{ mt: "1rem" }}>
              <Typography
                variant="body3"
                sx={{ display: "flex", alignItems: "center", gap: "1rem" }}
              >
                <ManageAccountsIcon />

                Admin Options
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Box
                sx={{
                  display: "flex",
                  width: "100%",
                  gap: "1rem",
                }}
              >
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => setOpenCategory(true)}
                >
                  Add Category
                </Button>

                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => setOpen(true)}
                >
                  Add Interest
                </Button>
              </Box>
            </Grid>
          </Can>

          <Grid item xs={12}>
            <Divider textAlign="left" sx={{ mt: '1rem' }}>
              <Typography variant="h4">Choose Your Interests</Typography>
            </Divider>
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
                      <InterestCard title={item.name} icon={<OpenInNewOutlinedIcon />} index={index} />
                    </CustomTooltip>
                  </Grid>
                </Grow>
              ))}
            </Fragment>
          ))}
        </Grid>
      </Box>

      <Can I="read" a="admin-options">
        <ClassicDialog
          open={open}
          setOpen={setOpen}
          title="Add Interest"
          actions={
            <Button
              variant="contained"
              color="success"
              onClick={() => setOpen(false)}
            >
              Create
            </Button>
          }
        >
          <InterestForm values={values} setValues={setValues} />
        </ClassicDialog>

        <ClassicDialog
          open={openCategory}
          setOpen={setOpenCategory}
          title="Add Category"
          actions={
            <Button
              variant="contained"
              color="success"
              onClick={() => setOpen(false)}
            >
              Create
            </Button>
          }
        >
          <InterestCategoryForm values={values} setValues={setValues} />
        </ClassicDialog>
      </Can>
    </Fragment>
  );
};

export default Interests;
