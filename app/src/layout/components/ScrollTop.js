"use client";
import { hexToRGBA } from "@/utils/hex-to-rgba";
import { NorthRounded } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import { useEffect, useRef } from "react";

const ScrollTop = () => {
  const arrow = useRef();

  useEffect(() => {
    window.addEventListener('scroll',() => {
      if (window.pageYOffset >= 200) {
        if (arrow.current) arrow.current.style.bottom = "1rem";
      } else {
        if (arrow.current) arrow.current.style.bottom = "-100%";
        // if (arrow.current) arrow.current.style.opacity = 0;
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Box sx={{ overflow: 'hidden' }}>
      <Button
        ref={arrow}
        onClick={scrollToTop}
        aria-label="arrows"
        color="primary"
        sx={{
          // opacity: 0,
          position: 'fixed',
          transitionDuration: '500ms',
          transitionProperty: 'all',
          transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
          // boxShadow: theme => `0 0 5px ${hexToRGBA(theme.palette.background.paper, 1)}`,
          border: '1px solid',
          // bottom: '1rem',
          right: '2rem',
          p: '0',
          zIndex: 99,
          color: theme => theme.palette.primary.main,
          height: '40px',
          minWidth: '40px',
          width: '40px !important',
          backgroundColor: theme => `${hexToRGBA(theme.palette.background.paper, 1)} !important`,
          '&:hover': {
            transform: 'translate(0, -0.25rem) rotate(0) skewX(0) skewY(0) scaleX(1) scaleY(1)',
          }
        }}
      >
        <NorthRounded />
      </Button>
    </Box >
  );
};

export default ScrollTop;
