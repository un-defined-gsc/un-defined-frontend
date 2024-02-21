import { hexToRGBA } from "@/utils/hex-to-rgba"

const container = theme => {
  return {
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          cursor: "pointer",
          borderRadius: "5px",
          textTransform: "none",
          color: theme.palette[ownerState.color].contrastText,
          backgroundColor: `${theme.palette[ownerState.color].main} !important`,
          ...(ownerState.variant == "outlined" && {
            color: ownerState.color == "black" && "#06122F",
            backgroundColor: "transparent !important",
          }),
          ...(ownerState.variant == "standard" &&
            { backgroundColor: "transparent" }),
        }),
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          cursor: "pointer",
          color: theme.palette.secondary.main,
        }),
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          cursor: "pointer",
          fontSize: "1rem",
          borderRadius: "5px",
          backgroundColor: `${theme.palette[ownerState.color || "primary"].main} !important`,
          ...(ownerState.variant == "standard" &&
            { backgroundColor: "transparent" }),
          '&:hover': {
            backgroundColor: `${hexToRGBA(theme.palette[ownerState.color || "secondary"].main, 0.12)} !important`,
            '& .MuiListItemText-root, & .MuiListItemIcon-root': {
              color: theme.palette.text.primary,
            }
          }
        }),
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: theme.palette.secondary.dark,
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          color: theme.palette.secondary.dark,
        },
      },
    }
  }
}

export default container
