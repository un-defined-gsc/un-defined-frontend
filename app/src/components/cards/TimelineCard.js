import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Drawer,
  Typography,
} from "@mui/material";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import ClassicDialog from "../dialogs/ClassicDialog";
import IntestForm from "../forms/InterestForm";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Can from "@/layout/components/acl/Can";
import Link from "next/link";

const TimelineCard = ({ title, description }) => {
  const data = [
    {
      name: "Quick Start",
      description: "You can start learning GoLang by following the official documentation.",
      details: "https://go.dev/doc/tutorial/getting-started",
    },
    {
      name: "Loops & Conditions",
      description: "The control structures of Go are related to those of C but differ in important ways.",
      details: "https://go.dev/doc/effective_go#if",
    },
    {
      name: "Data Types & Variables",
      description: "Finally, each source file can define its own niladic init function to set up whatever state is required. ",
      details: "https://go.dev/doc/effective_go#variables",
    },
    {
      name: "Arrays & Slices",
      description: "Arrays are useful when planning the detailed layout of memory and sometimes can help avoid allocation, but primarily they are a building block for slices, the subject of the next section",
      details: "https://go.dev/doc/effective_go#arrays",
    },
    {
      name: "Maps & Structs",
      description: "Maps are a convenient and powerful built-in data structure that associate values of one type (the key) with values of another type (the element or value)",
      details: "https://go.dev/doc/effective_go#maps",
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
        <Typography variant="h5" color="info">
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
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Button
          variant="outlined"
          color="info"
          sx={{
            width: "fit-content",
          }}
          onClick={() => setOpenDrawer(true)}
        >
          Details
        </Button>
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
              <Typography variant="h5" color="info">
                Syntax & Basic Concepts
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
                By learning the basic concepts and syntax structure of GoLang
                language, we will make an introduction to GoLang language and
                its basic concepts. We will also learn about the basic syntax of
                GoLang language.
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
                        component="div"
                        sx={{
                          textAlign: "justify",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          color: "blue !important",
                        }}
                      >
                        <Typography
                          variant="subtitle"
                          component="div"
                          sx={{
                            textAlign: "justify",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                        >{item.description}</Typography>

                        <Link
                          sx={{
                            marginTop: "10px",
                          }}
                        href={item.details}>
                           {item.details}
                        </Link>
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
              ))}
              <Can I="read" a="admin-addroadmap">
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
              </Can>
            </Box>
          </Box>
        </Drawer>
      </CardActions>
    </Card>
  );
};

export default TimelineCard;
