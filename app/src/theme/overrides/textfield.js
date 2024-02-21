import { hexToRGBA } from "@/utils/hex-to-rgba"

const textfield = theme => {
  return {
    MuiTextField: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          "& fieldset": {
            border: "1px solid border.light",
            borderRadius: "0.75rem",
            backgroundColor: hexToRGBA(theme.palette.border.main, 0.08),
          },
          // yazı rengi
          "& .MuiInputBase-input": {
            color: "#000",
            zIndex: 99,
          },
          // label rengi
          "& .MuiFormLabel-root": {
            color: "#000",
            zIndex: 99,
          },
          "& .MuiInputBase-input:-webkit-autofill": {
            WebkitBoxShadow: `0 0 0 1000px ${hexToRGBA(theme.palette.border.main, 0.08)} inset`,
            zIndex: 90,
            borderWidth: "1px",
            borderRadius: "0.75rem",
            backgroundColor: "unset !important",

          },
          " & .input:-internal-autofill-selected": {
            backgroundColor: "unset !important",
          },
          ...(ownerState.variant === "filled" && {
            borderRadius: "0.75rem",
            "& input, & textarea": {
              border: "unset !important",
              borderRadius: "0.75rem",
            },
            "& .MuiInputBase-root": {
              backgroundColor: hexToRGBA(theme.palette.border.main, 0.08),
            },
            "& .MuiInputBase-root::before": {
              display: "none",
              border: "unset !important",
            },
            "& .MuiInputBase-root::after": {
              display: "none",
              border: "unset !important",
            },
          }),
        }),
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          borderRadius: "0.75rem !important",
          backgroundColor: hexToRGBA(theme.palette.border.main, 0.08),
          "& .MuiSelect-icon": {
            color: "border.main",
          },
          "&:focus": {
            backgroundColor: "unset",
          },
        },
      },
    },
  }
}

export default textfield
