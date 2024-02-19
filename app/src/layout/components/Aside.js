import CustomChip from "@/components/chip";
import { Autocomplete, Box, TextField, Typography } from "@mui/material";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import { theme } from "@/configs/theme";

const Aside = () => {

    console.log(theme)

  const searchData = [
    {
      title: "Title 1",
    },
    {
      title: "Title 2",
    },
    {
      title: "Title 3",
    },
    {
        title : "Deneme 1"
    }
  ];

  const options = searchData.map((option) => {
    const firstLetter = option.title[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
      ...option,
    };
  });

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "300px",
        maxHeight: "100vh",
        height: "calc(100vh - 80px)",
        gap: "16px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box>
        <Typography variant="h5" color="secondary">
          Search
        </Typography>
      {/* groupBy'ı verilere göre listeleriz.
        getOptionLabel ise inputa yazılan değerlere göre listeleriz.
      */}
        <Autocomplete
              id="grouped-demo"
              options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
              getOptionLabel={(option) => option.title}
              groupBy={(option) => option.firstLetter}
              renderInput={(params) => (
            <TextField {...params} variant="outlined"  />
          )}
        />
      </Box>

      <Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            marginTop: "16px",
          }}
        >
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
            variant="h5"
            color="secondary"
          >
            <WidgetsOutlinedIcon />
            Categories
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: "15px",
              flexWrap: "wrap",
            }}
          >
            <CustomChip
              label="Technology"
              color="secondary"
              rounded
              sx={{ width: "fit-content" }}
            />
            <CustomChip
              label="Science"
              color="secondary"
              rounded
              sx={{ width: "fit-content" }}
            />
            <CustomChip
              label="Health"
              color="secondary"
              rounded
              sx={{ width: "fit-content" }}
            />
          </Box>
        </Box>
      </Box>

      <Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            marginTop: "16px",
          }}
        >
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
            variant="h5"
            color="secondary"
          >
            <LocalOfferOutlinedIcon />
            Tags
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: "15px",
              flexWrap: "wrap",
            }}
          >
            <CustomChip
              label="Technology"
              color="warning"
              skin="light"
              rounded
              sx={{ width: "fit-content" }}
            />
            <CustomChip
              label="Science"
              color="warning"
              skin="light"
              rounded
              sx={{ width: "fit-content" }}
            />
            <CustomChip
              label="Health"
              color="warning"
              skin="light"
              rounded
              sx={{ width: "fit-content" }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Aside;
