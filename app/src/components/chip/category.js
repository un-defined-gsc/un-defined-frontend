import { Button } from "@mui/material";

const CategoryChip = ({ label, key, isActive,info = false }) => {
  return (
    <Button
      variant={isActive ? "contained" : "outlined"}
      color="secondary"
      size="middle"
      disabled = {info}
      sx={{
        textTransform: "capitalize",
        // üstünde geldiğinde hover olacak
        "&:hover": {
          backgroundColor: "rgba(0,0,0,0.1)",
        },
      ...(info && {
        cursor: "default",
        boxShadow: "none",
        color : (theme) => theme.palette.text.light + "!important",
        "&:hover": {
          boxShadow: "none",
        },
      })
      }}
      key={key}
    >
      {label}
    </Button>
  );
};

export default CategoryChip;
