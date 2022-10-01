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
const Categories = () => {
  const [age, setAge] = React.useState("");
  const [data, setdata] = React.useState(cardData);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box>
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
                  <Typography variant="h6" sx={{ color: "#262626" }}>
                    BathRobes
                  </Typography>
                  <Typography variant="p">
                    1443 item found in Bathrobes
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
            <Grid container>
              {data.map((cardItem, i) => {
                return (
                  <>
                    <Grid item md={3} xs={12} key={i}>
                      <NavLink
                        to={`/product/${cardItem.id}`}
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
