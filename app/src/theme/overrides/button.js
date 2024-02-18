
const container = theme => {
  return {
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          borderRadius: "5px",
          backgroundColor: `${theme.palette[ownerState.color].main} !important`,
          ...(ownerState.variant == "outlined" &&
            ownerState.color == "black" && { color: "#06122F" }),
        }),
      },
    }
  }
}

export default container
