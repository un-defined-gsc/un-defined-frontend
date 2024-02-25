import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Drawer,
  Typography
} from "@mui/material";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import ClassicDialog from "../dialogs/ClassicDialog";
import IntestForm from "../forms/InterestForm";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';


const TimelineCard = ({ title, description }) => {
  const data = [
    {
      name: "Node.js",
      details : "Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.",
    },
    {
      name: "Go Programming",
      details : "Go is an open source programming language that makes it easy to build simple, reliable, and efficient software.",
    },
    {
      name: "Redis",
      details : "Redis is an open source (BSD licensed), in-memory data structure store, used as a database, cache, and message broker.",
    },
    {
      name: "Postgres",
      details : "PostgreSQL is a powerful, open source object-relational database system with over 30 years of active development that has earned it a strong reputation for reliability, feature robustness, and performance.",
    },
  ];

  const [openDrawer, setOpenDrawer] = useState(false);
  const [open, setOpen] = useState(false);

  const item = {
    title: title,
    description: description,
  };

  const [values, setValues] = useState({
    title: "",
    subtitle: "",
  });

  return (
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
          {item.title}
        </Typography>
        <Typography
          variant="subtitle"
          component="div"
          sx={{
            textAlign: "justify",
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            whiteSpace: "pre-line",
          }}
        >
          {item.description}
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
          onClick={() => setOpenDrawer(true)}
        >
          Detay
        </Button>
      </CardContent>
      <CardActions>
        <Drawer
          variant="temporary"
          anchor="right"
          open={openDrawer}
          onClose={() => setOpenDrawer(false)}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            height: "2%",
          }}
        >
          <Box sx={{ width: 500 }}>
            <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
              <Button onClick={() => setOpenDrawer(false)}>
                <CloseIcon />
              </Button>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                padding: "16px",
              }}
            >
              <Typography variant="h5" color="secondary">
                Title
              </Typography>

              <Typography
                variant="subtitle"
                component="div"
                sx={{
                  textAlign: "justify",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s Lorem Ipsum is simply dummy text of
                the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s
              </Typography>

              <Divider />

              {data.map((item, index) => (
                <div>
                <Accordion key={index}>
                  <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>{item.name}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      variant="subtitle"
                      component="div"
                      sx={{
                        textAlign: "justify",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >{item.details}</Typography>
                  </AccordionDetails>
                </Accordion>
                </div>
              ))}

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  padding: "16px",
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => setOpen(true)}
                  sx={{
                    width: "30%",
                    padding: "8px",
                    marginLeft: "auto",
                  }}
                >
                  Add RoadMap
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
            </Box>
          </Box>
        </Drawer>
      </CardActions>
    </Card>
  );
};

export default TimelineCard;
