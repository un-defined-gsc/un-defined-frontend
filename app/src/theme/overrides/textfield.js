
const textfield = theme => {
  return {
    MuiTextField: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          "& fieldset": {
              border: "1px solid border.light",
              borderRadius: "0.75rem",
              backgroundColor: "#FCFCFC",
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
              WebkitBoxShadow: "0 0 0 1000px #FCFCFC inset",
              zIndex: 90,
              borderWidth : "1px",
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
                  backgroundColor: "#FCFCFC",
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
            backgroundColor: "#FCFCFC",
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
