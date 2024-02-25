import Typography from "@mui/material/Typography";
import { styled, useTheme } from "@mui/material/styles";
import MuiTimeline from "@mui/lab/Timeline";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box, Button, Divider, Grid } from "@mui/material";
import { Fragment, useState } from "react";
import ClassicDialog from "@/components/dialogs/ClassicDialog";
import Can from "@/layout/components/acl/Can";
import { ManageAccounts } from "@mui/icons-material";
import RoadmapForm from "@/components/forms/RoadmapForm";
import TimelineCard from "@/components/cards/TimelineCard";

const Timeline = styled(MuiTimeline)(({ theme }) => ({
  paddingLeft: 0,
  paddingRight: 0,
  "& .MuiTimelineItem-root:nth-of-type(even) .MuiTimelineContent-root": {
    textAlign: "left",
  },
  [theme.breakpoints.down("md")]: {
    "& .MuiTimelineItem-root": {
      width: "100%",
      "&:before": {
        display: "none",
      },
    },
  },
}));

const colors = ["success", "info", "warning", "error", "primary", "secondary"];

const data = [
  {
    title: "Syntax & Basic Concepts",
    description:
      "By learning the basic concepts and syntax structure of GoLang language, we will make an introduction to GoLang language and its basic concepts. We will also learn about the basic syntax of GoLang language. ",
  },
  {
    title: "Functions & Methods",
    description:
      "In Go, functions are defined and used with function name, parameters and return value as in other languages. Method : Methods in Go are not defined inside classes like in other languages. In Go, methods are defined and used like functions.",
  },
  {
    title: "Packages & Modules",
    description:
      "Package : In Go, packages are used as libraries as in other languages. Module : In Go, modules are used to manage the dependencies of the project, as in other languages.",
  },
  {
    title: "Concurrency & Channels",
    description:
      "Concurrency : In Go, concurrency is achieved by using goroutines. Channels : In Go, channels are used to communicate between goroutines.",
  },
  {
    title: "REST API Development",
    description:
      "RESTful API : RESTful API is an interface that web services use to interact with users. RESTful API works over the HTTP protocol and interacts with HTTP methods.",
  },
    {
        title: "Database & ORM",
        description:
        "Database : In Go, database is used to store the data. ORM : In Go, ORM (Object Relational Mapping) is used to map the objects to the database.",
    },

    {
        title: "Microservices ",
        description: "Microservices : Microservices is an architectural style that structures an application as a collection of services that are highly maintainable, loosely coupled, independently deployable, and organized around business capabilities.",
    },
];

const RoadmapView = () => {
  const theme = useTheme();
  const [values, setValues] = useState({
    name: "",
    description: "",
  });

  const [open, setOpen] = useState(false);

  const isBelowMdScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Fragment>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Can I="read" a="admin-options">
            <Grid item xs={12} sx={{ mt: "1rem" }}>
              <Typography
                variant="body3"
                sx={{ display: "flex", alignItems: "center", gap: "1rem" }}
              >
                <ManageAccounts />
                Admin Options
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Box
                sx={{
                  display: "flex",
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
                  Add Subject to Roadmap
                </Button>
              </Box>
            </Grid>
          </Can>
        </Grid>

        <Grid item xs={12}>
          <Divider textAlign="middle">
            <Typography variant="h4">{"Go Programming Language"}</Typography>
          </Divider>
        </Grid>

        <Grid item xs={12}>
          <Timeline position={isBelowMdScreen ? "right" : "alternate"}>
            {data?.map((item, index) => (
              <TimelineItem key={index}>
                {!isBelowMdScreen && (
                  <TimelineOppositeContent color="text.disabled"></TimelineOppositeContent>
                )}
                <TimelineSeparator>
                  <TimelineDot color={colors[index % 5]}></TimelineDot>

                  <TimelineConnector />
                </TimelineSeparator>

                <TimelineContent>
                  <TimelineCard
                    title={item.title}
                    description={item.description}
                  />
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Grid>
      </Grid>

      <ClassicDialog
        open={open}
        setOpen={setOpen}
        title="Add Subject to Roadmap"
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
        <RoadmapForm values={values} setValues={setValues} />
      </ClassicDialog>
    </Fragment>
  );
};

RoadmapView.acl = {
  action: "read",
  subject: "social",
};

export default RoadmapView;
