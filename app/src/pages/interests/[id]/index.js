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
import { Box, Button, Divider} from "@mui/material";
import { useState } from "react";
import ClassicDialog from "@/components/dialogs/ClassicDialog";
import IntestForm from "@/components/forms/IntrestForm";
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";
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

const data = [
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
];

const item = {
  title: "Başlık",
  description:
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
};

const index = () => {
  const theme = useTheme();
  const [values, setValues] = useState({
    title: "",
    subtitle: "",
  });

  const [open, setOpen] = useState(false);

  const isBelowMdScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box>
      <Divider textAlign="middle">
        <Typography variant="h4">Interest Title</Typography>
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
          Add Timeline
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

      <Timeline position={isBelowMdScreen ? "right" : "alternate"}>
        <TimelineItem>
          {!isBelowMdScreen && (
            <TimelineOppositeContent color="text.disabled"></TimelineOppositeContent>
          )}
          <TimelineSeparator>
            <TimelineDot color="success"></TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Box>
              <TimelineCard title={item.title} description={item.description} />
            </Box>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          {!isBelowMdScreen && (
            <TimelineOppositeContent color="text.disabled"></TimelineOppositeContent>
          )}
          <TimelineSeparator>
            <TimelineDot color="error"></TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <TimelineCard title={item.title} description={item.description} />
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          {!isBelowMdScreen && (
            <TimelineOppositeContent color="text.disabled"></TimelineOppositeContent>
          )}
          <TimelineSeparator>
            <TimelineDot color="info"></TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <TimelineCard title={item.title} description={item.description} />

          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          {!isBelowMdScreen && (
            <TimelineOppositeContent color="text.disabled"></TimelineOppositeContent>
          )}
          <TimelineSeparator>
            <TimelineDot color="warning"></TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <TimelineCard title={item.title} description={item.description} />
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Box>
  );
};

index.acl = {
  action: "read",
  subject: "social",
};

export default index;
