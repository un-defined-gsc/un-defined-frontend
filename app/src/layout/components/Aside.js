import { Autocomplete, Box, TextField, Typography } from "@mui/material";
// import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import TagIcon from "@mui/icons-material/Tag";
import TagChip from "@/components/chip/tag";
import CategoryChip from "@/components/chip/category";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories, getCategories } from "@/store/api/category";
import { getFilter, setFilter } from "@/store/api/post";

const Aside = () => {


  const dispatch = useDispatch();

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
      title: "Deneme 1",
    },
  ];

  const categories = useSelector(getCategories);
  const filter = useSelector(getFilter);

  const options = searchData.map((option) => {
    const firstLetter = option.title[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
      ...option,
    };
  });

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  const handleChangeCategory = (id) => {
    if (filter.categoryId == id) {
      dispatch(setFilter({
        ...filter,
        categoryId: "",
      }));
    } else {
      dispatch(setFilter({
        ...filter,
        categoryId: id,
      }));
    }
    // if (selectedCategories.includes(id)) {
    //   dispatch(setSelectedCategories(selectedCategories.filter((item) => item !== id)));
    // } else {
    //   dispatch(setSelectedCategories([...selectedCategories, id]));
    // }
  }

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
        <Box sx={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <Typography variant="h5" color="secondary">
            Search
          </Typography>
          {/* groupBy'ı verilere göre listeleriz.
        getOptionLabel ise inputa yazılan değerlere göre listeleriz.
      */}
          <Autocomplete
            id="grouped-demo"
            options={options.sort(
              (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
            )}
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
                maxWidth: "300px",
              }}
            >
              {categories.map((item, index) => (
                <CategoryChip
                  key={index}
                  label={item.category}
                  isActive={filter.categoryId == item.id}
                  onClick={() => handleChangeCategory(item.id)}
                />
              ))}
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
                maxWidth: "300px",
              }}
            >
              <TagChip label="FindJob" />
              <TagChip label="MyStory" />
              <TagChip label="IhaveQuestions" />
              <TagChip label="Story" />
              <TagChip label="Life" />
              <TagChip label="Love" />
              <TagChip label="Happiness" />
              <TagChip label="Strong" />
              <TagChip label="GirlPower" />
              <TagChip label="Love" />
              <TagChip label="Help" />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Aside;
