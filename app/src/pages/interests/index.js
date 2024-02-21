import { theme } from "@/configs/theme";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import { Box, Card, Divider, Grid, Typography } from "@mui/material";
import { useRouter } from "next/router";

const index = () => {
  const router = useRouter();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          fontSize: "16px",
          width: "100%",
          gap: "16px",
          marginTop: "24px",
        }}
      >
        <Typography
          sx={{
            fontSize: "24px",
            fontWeight: "bold",
            color: "#000000",
            marginBottom: "16px",
          }}
          variant="h5"
          component="h2"
        >
          Choose Your Interests
        </Typography>
      </Box>

      <Divider
        sx={{
          width: "100%",
          height: "1px",
          background: theme.palette.border.light,
        }}
      />

      <Grid
        container
        spacing={3}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "24px",
        }}
      >
        {[...Array(8)].map((_, index) => (
          <Grid item xs={12} sm={6} md={4} lg={5} key={index} 
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          > 
          <Card
              sx={{
                width: "100%",
                borderRadius: "20px",
                padding: "16px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
              }}
              onClick={() => router.push(`/interests/${index + 1}`)}
            >
              <Typography
                sx={{ display: "flex", gap: "8px", alignItems: "center" }}
                variant="h5"
                component="h2"
              >
                <ChevronRightOutlinedIcon sx={{ fontSize: "1.563rem" }} />
                Interests
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default index;

index.acl = {
  action: "read",
  subject: "social",
};
