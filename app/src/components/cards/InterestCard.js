import { theme } from "@/configs/theme";
import { Card, CardContent, Typography } from "@mui/material";
import { useRouter } from "next/router";

const InterestCard = ({ title, icon, index }) => {
  const router = useRouter();

  const item = {
    name: title,
    icon: icon,
    index: index
  }

  return (
    <Card
      sx={{
        width: "100%",
        cursor: "pointer",
        "&:hover": {
          borderColor: theme.palette.primary.main,
          transform: "scale(1.025)",
        },
      }}
      variant="bordered"
      onClick={() => router.push(`/interests/${index + 1}`)}
    >
      <CardContent>
        <Typography
          sx={{
            gap: "1rem",
            alignItems: "center",
            width: "100%",
            display: "flex",
          }}
          variant="body2"
        >
          {item.icon}

          <Typography
            sx={{
              textOverflow: "ellipsis",
              overflow: "hidden",
              whiteSpace: "nowrap",
              webkitLineClamp: 1,
              width: "100%",
              WebkitBoxOrient: "vertical",
            }}
            variant="body2"
          >
            {item.name}
          </Typography>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default InterestCard;
