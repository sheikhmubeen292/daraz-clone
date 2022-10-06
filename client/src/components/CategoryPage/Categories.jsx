import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";
import cardData from "./CategoryData";
import GridViewIcon from "@mui/icons-material/GridView";
import ViewListIcon from "@mui/icons-material/ViewList";
import CategoriesSidebar from "./CategoriesSidebar";
import CategotyCard from "./CategoryCard";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
const Categories = () => {
  const [age, setAge] = React.useState("");
  const [data, setData] = React.useState([]);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const { category } = useParams();
  console.log(category, "my Id");

  const getAllProducts = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/products/allproducts"
      );
      const newData = res.data.filter((x) => x.category == category);

      console.log(res.data, "------------------all");
      console.log(newData, "newdata---");

      setData(newData);
    } catch (error) {}
  };

  React.useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <Box py={6}>
      <Container>
        <Grid container>
          <Grid item md={3} sx={3}>
            <Box>
              <CategoriesSidebar />
            </Box>
          </Grid>
          <Grid item md={9} sx={9} py={2}>
            <Grid container>
              <Grid item md={6}>
                <Box sx={{ color: "#262626" }}>
                  <Typography
                    variant="h6"
                    sx={{ color: "#262626", textTransform: "capitalize" }}
                  >
                    {category}
                  </Typography>
                  <Typography variant="p">
                    {`   ${data.length} item found in ${category}`}
                  </Typography>
                </Box>
              </Grid>
              <Grid item md={4}>
                <Box sx={{ display: "flex" }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    Sortby:
                  </Box>
                  <FormControl sx={{ m: 1, minWidth: "200px", color: "black" }}>
                    <Select
                      value={age}
                      onChange={handleChange}
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                    >
                      <MenuItem value="">
                        <p>Best Of Match</p>
                      </MenuItem>
                      <MenuItem value={10}>Price low to high</MenuItem>
                      <MenuItem value={10}>Price high to low</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
              <Grid
                md={2}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box textAlign="center" sx={{ marginRight: "0.5rem" }}>
                  View:
                </Box>
                <Box marginTop="0.5rem">
                  <GridViewIcon sx={{ marginRight: "0.5rem" }} />
                  <ViewListIcon />
                </Box>
              </Grid>
            </Grid>
            <hr></hr>
            <Grid container spacing={1}>
              {data.map((cardItem, i) => {
                return (
                  <>
                    <Grid item md={3} xs={12} key={i}>
                      <NavLink
                        to={`/product/${cardItem._id}`}
                        style={{ textDecoration: "none" }}
                      >
                        <CategotyCard cardItem={cardItem} />
                      </NavLink>
                    </Grid>
                  </>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Categories;
