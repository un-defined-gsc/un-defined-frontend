import { Button } from "@mui/material";

const CategoryChip = (props) => {
  const { label, key, isActive, info = false } = props;

  const _props = { ...props };
  delete _props.label;
  delete _props.key;
  delete _props.isActive;
  delete _props.info;

  return (
    <Button
      {..._props}
      key={key}
      variant={isActive ? "contained" : "outlined"}
      color="secondary"
      size="middle"
      disabled={info}
      sx={{
        textTransform: "capitalize",
        // üstünde geldiğinde hover olacak
        "&:hover": {
          backgroundColor: "rgba(0,0,0,0.1)",
        },
        ...(info && {
          cursor: "default",
          boxShadow: "none",
          color: (theme) => theme.palette.text.light + "!important",
          "&:hover": {
            boxShadow: "none",
          },
        })
      }}
    >
      {label}
    </Button>
  );
};

export default CategoryChip;
