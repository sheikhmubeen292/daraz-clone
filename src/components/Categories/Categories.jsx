import { Box, Container, Typography } from "@mui/material";
import React from "react";
import goloves from "./CategoriesImg/goloves.jpg";
import card from "./CategoriesImg/card.jpg";
import pressureWasher from "./CategoriesImg/pressureWasher.jpg";
import mobile from "./CategoriesImg/mobile.jpg";
import microSd from "./CategoriesImg/microSd.jpg";
import paintGun from "./CategoriesImg/paintGun.jpg";
import dryBox from "./CategoriesImg/dryBox.jpg";
import garlicTool from "./CategoriesImg/garlicTool.jpg";
import featurePhone from "./CategoriesImg/featurePhone.jpg";
import clock from "./CategoriesImg/clock.png";
import kids from "./CategoriesImg/kids.jpg";
import pencils from "./CategoriesImg/pencils.jpg";
import diningSets from "./CategoriesImg/diningSets.jpg";
import nailsGun from "./CategoriesImg/nailsGun.jpg";
import lifter from "./CategoriesImg/lifter.jpg";
import polishers from "./CategoriesImg/polishers.jpg";

const Categories = () => {
  const categories = [
    {
      img: goloves,
      text: "  Cleaning Gloves",
    },
    {
      img: mobile,
      text: " Mobiles",
    },
    {
      img: pressureWasher,
      text: "Pressure Washers",
    },
    {
      img: card,
      text: "SD Card",
    },
    {
      img: microSd,
      text: "Micro SD Card",
    },
    {
      img: paintGun,
      text: "Paint Guns",
    },
    {
      img: dryBox,
      text: "Dry Box",
    },
    {
      img: garlicTool,
      text: "Garlic Tools",
    },
    {
      img: featurePhone,
      text: "Feature Phone",
    },
    {
      img: clock,
      text: "Alaram Clocks",
    },
    {
      img: kids,
      text: "Kids Wears",
    },
    {
      img: pencils,
      text: "Pencils",
    },
    {
      img: diningSets,
      text: "Dining Sets",
    },
    {
      img: nailsGun,
      text: "Nails Gun",
    },
    {
      img: lifter,
      text: "lifters",
    },
    {
      img: polishers,
      text: "Polishers",
    },
  ];
  return (
    <Box sx={{ mt: 11 }}>
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "row", md: "row" },
            alignItem: "center",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {categories.map(({ img, text }) => {
            return (
              <Box
                sx={{
                  bgcolor: "#fff",
                  boxShadow: "0 0 4px 0 rgb(0 0 0 / 25%)",
                  "&:hover": {
                    boxShadow: "0 0 4px 0 rgb(0 0 0 / 85%)",
                  },
                  width: { xs: "45%", md: "12%" },
                  mt: "2px",
                  ml: "2px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItem: "center",
                    justifyContent: "center",
                    width: "100%",
                  }}
                >
                  <img src={img} alt="" width="110px" />
                </Box>
                <Typography
                  sx={{
                    fontSize: "14px",
                    color: "#212121",
                    display: "flex",
                    alignItem: "center",
                    justifyContent: "center",
                  }}
                >
                  {text}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

export default Categories;
