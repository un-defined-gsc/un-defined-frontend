import { hexToRGBA } from "@/utils/hex-to-rgba"

const card = theme => {
  return {
    MuiCard: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          borderRadius: "5px",
          backgroundColor: hexToRGBA(theme.palette.background.paper, 0.2),
          boxShadow: `0px 1px 5px ${theme.palette.secondary.main}`,
          ...(ownerState?.variant == "bordered" && {
            border: `1px solid ${theme.palette.secondary.main}`,
            boxShadow: "none",
          }),
          // boxShadow: 'none',
          // border: `1px solid ${theme.palette.secondary.main}`,
          // boxShadow: "none",
          // zIndex: 100,
          // "& .MuiCardContent-root": {
          //     padding: "2rem 4rem",
          //     "@media (max-width: 600px)": {
          //         padding: "1rem 2rem",
          //     },
          //     "&:last-child": {
          //         paddingBottom: "2rem",
          //     },
          // },
        }),
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: "1rem",
          paddingBottom: "1rem !important",
        },
      },
    },
  }
}

export default card
