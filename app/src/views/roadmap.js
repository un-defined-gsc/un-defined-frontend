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

const data = [
    {
        title: "Başlık",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
]

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
                        <Typography variant="h4">{"<Interest Title>"}</Typography>
                    </Divider>
                </Grid>

                <Grid item xs={12}>
                    <Timeline position={isBelowMdScreen ? "right" : "alternate"}>
                        {
                            data?.map((item, index) => (
                                <TimelineItem key={index}>
                                    {!isBelowMdScreen && (
                                        <TimelineOppositeContent color="text.disabled"></TimelineOppositeContent>
                                    )}
                                    <TimelineSeparator>
                                        <TimelineDot color="success"></TimelineDot>

                                        <TimelineConnector />
                                    </TimelineSeparator>

                                    <TimelineContent>
                                        <TimelineCard title={item.title} description={item.description} />
                                    </TimelineContent>
                                </TimelineItem>
                            ))
                        }
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
