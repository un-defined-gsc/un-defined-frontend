import CustomChip from "@/components/chip";
import { Autocomplete, Box, Button, TextField, Typography } from "@mui/material";
// import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import TagIcon from '@mui/icons-material/Tag';

const Aside = () => {
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
      title: "Deneme 1"
    }
  ];

  const categories = [
    {
      title: "Technology",
      selected: true,
    },
    {
      title: "Science",
    },
    {
      title: "Health",
    },
  ]

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
        position: "relative",
      }}
    >
      <Box
        sx={{
          gap: "16px",
          display: "flex",
          flexDirection: "column",
          position: "fixed",
          right: "1.5rem",
          top: "2rem",
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
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
            size="small"
            renderInput={(params) => (
              <TextField {...params} variant="outlined" />
            )}
          />
        </Box>

        <Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              marginTop: "1rem",
            }}
          >
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
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
                gap: "0.5rem",
                flexWrap: "wrap",
              }}
            >
              {
                categories.map((category, index) => (
                  <Button
                    key={index}
                    color="secondary"
                    variant={category.selected ? "contained" : "outlined"}
                  >
                    {category.title}
                  </Button>
                ))
              }
            </Box>
          </Box>
        </Box>

        <Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              marginTop: "1rem",
            }}
          >
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
              }}
              variant="h5"
              color="secondary"
            >
              <TagIcon />
              Tags
            </Typography>

            <Box
              sx={{
                display: "flex",
                gap: "0.5rem",
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
    </Box>
  );
};

export default Aside;
