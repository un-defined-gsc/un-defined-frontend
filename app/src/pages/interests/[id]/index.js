import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
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
import { Button } from "@mui/material";

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

const index = () => {
  const theme = useTheme();
  const isBelowMdScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
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
          <Card>
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                padding: "16px",
              }}
            >
              <Typography variant="h5" color="secondary">
                Başlık
              </Typography>
              <Typography
                variant="subtitle"
                component="div"
                sx={{
                  textAlign: "justify",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: 5,
                  WebkitBoxOrient: "vertical",
                  whiteSpace: "pre-line",
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </Typography>

              {/* image için */}
              {/* <Box className='flex items-center gap-2.5 w-fit rounded bg-actionHover plb-[5px] pli-2.5'>
                    <img height={20} alt='documentation.pdf' src='images/icons/pdf-document.png' />
                    <Typography className='font-medium'>documentation.pdf</Typography>
                  </Box> */}

              <Button
                variant="contained"
                color="primary"
                sx={{
                  width: "30%",
                  padding: "8px",
                  marginLeft: "auto",
                }}
              >
                Detay
              </Button>
            </CardContent>
          </Card>
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
          <Card>
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                padding: "16px",
              }}
            >
              <Typography variant="h5" color="secondary">
                Başlık
              </Typography>
              <Typography
                variant="subtitle"
                component="div"
                sx={{
                  textAlign: "justify",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: 5,
                  WebkitBoxOrient: "vertical",
                  whiteSpace: "pre-line",
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </Typography>

              {/* image için */}
              {/* <Box className='flex items-center gap-2.5 w-fit rounded bg-actionHover plb-[5px] pli-2.5'>
                    <img height={20} alt='documentation.pdf' src='images/icons/pdf-document.png' />
                    <Typography className='font-medium'>documentation.pdf</Typography>
                  </Box> */}

              <Button
                variant="contained"
                color="primary"
                sx={{
                  width: "30%",
                  padding: "8px",
                  marginLeft: "auto",
                }}
              >
                Detay
              </Button>
            </CardContent>
          </Card>
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
          <Card>
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                padding: "16px",
              }}
            >
              <Typography variant="h5" color="secondary">
                Başlık
              </Typography>
              <Typography
                variant="subtitle"
                component="div"
                sx={{
                  textAlign: "justify",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: 5,
                  WebkitBoxOrient: "vertical",
                  whiteSpace: "pre-line",
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </Typography>

              {/* image için */}
              {/* <Box className='flex items-center gap-2.5 w-fit rounded bg-actionHover plb-[5px] pli-2.5'>
                    <img height={20} alt='documentation.pdf' src='images/icons/pdf-document.png' />
                    <Typography className='font-medium'>documentation.pdf</Typography>
                  </Box> */}

              <Button
                variant="contained"
                color="primary"
                sx={{
                  width: "30%",
                  padding: "8px",
                  marginLeft: "auto",
                }}
              >
                Detay
              </Button>
            </CardContent>
          </Card>
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
          <Card>
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                padding: "16px",
              }}
            >
              <Typography variant="h5" color="secondary">
                Başlık
              </Typography>
              <Typography
                variant="subtitle"
                component="div"
                sx={{
                  textAlign: "justify",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: 5,
                  WebkitBoxOrient: "vertical",
                  whiteSpace: "pre-line",
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </Typography>

              {/* image için */}
              {/* <Box className='flex items-center gap-2.5 w-fit rounded bg-actionHover plb-[5px] pli-2.5'>
                    <img height={20} alt='documentation.pdf' src='images/icons/pdf-document.png' />
                    <Typography className='font-medium'>documentation.pdf</Typography>
                  </Box> */}

              <Button
                variant="contained"
                color="primary"
                sx={{
                  width: "30%",
                  padding: "8px",
                  marginLeft: "auto",
                }}
              >
                Detay
              </Button>
            </CardContent>
          </Card>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};

index.acl = {
  action: "read",
  subject: "social",
};

export default index;
