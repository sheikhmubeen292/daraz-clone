import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import airBirds1 from "../../assets/airBirds1.jpg";
import airBirds2 from "../../assets/airBirds2.png";
import airBirds3 from "../../assets/airBirds3.jpg";
import headphone1 from "../../assets/headphone1.jpg";
import headphone2 from "../../assets/headphone2.jpg";
import watch from "../../assets/watch.png";
const FlashSale = () => {
  const flashSale = [
    {
      img: airBirds1,
      text: "I7 Mini Bluetooth Headset Earbud Single Wireless Earphone With Mic Stereo For all phones",
      price: "Rs.249",
      disPrice: "Rs 999",
      discount: "-75%",
    },
    {
      img: watch,
      text: " Stylish & Fashionable Digital Touch Magnet Watch For Girls/Boys Men/Women",
      price: "Rs.249",
      disPrice: "Rs 999",
      discount: "-75%",
    },
    {
      img: airBirds2,
      text: "Earbuds with charging cable for all smart Phones- White/Black",
      price: "Rs.797",
      disPrice: "Rs 999",
      discount: "-60%",
    },
    {
      img: headphone1,
      text: "Wireless Bluetooth 5.0 Earphone Sports Sweatproof Headphone Touch Portable Earbuds",
      price: "Rs.699",
      disPrice: "Rs.1999",
      discount: "-65%",
    },
    {
      img: headphone2,
      text: " wireless bluetooth handsfree for all phones",
      price: "Rs.348",
      disPrice: "Rs.499",
      discount: "-30%",
    },
    {
      img: airBirds3,
      text: "I7 Mini Bluetooth Headset Earbud Single Wireless Earphone With Mic Stereo For all phones",
      price: "Rs.249",
      disPrice: "Rs 999",
      discount: "-75%",
    },
  ];
  return (
    <div>
      <Box sx={{ mt: 2 }}>
        <Container maxWidth="lg">
          <Typography
            sx={{ color: "#757575", fontSize: "22px", fontWeight: 400, my: 2 }}
          >
            Flash Sale
          </Typography>
          <Grid container>
            {flashSale.map(({ img, text, price, disPrice, discount }) => {
              return (
                <Grid
                  item
                  xs={6}
                  sm={6}
                  md={2}
                  sx={{
                    display: "flex",
                    alignItem: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Box
                    sx={{
                      p: "4px",
                      width: "90%",
                      bgcolor: "#fff",
                      boxShadow: "0 0 4px 0 rgb(0 0 0 / 25%)",
                      "&:hover": {
                        boxShadow: "0 0 4px 0 rgb(0 0 0 / 85%)",
                        cursor: "pointer",
                      },
                    }}
                  >
                    <Box>
                      <img src={img} alt="" width="100%" />
                    </Box>{" "}
                    <Typography
                      sx={{
                        fontSize: "15px",
                        display: "-webkit-box !important",
                        WebkitLineClamp: "2",
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {text}
                    </Typography>
                    <Typography
                      sx={{
                        color: "#F95606",
                        fontSize: "18px",
                        fontWeight: 400,
                      }}
                    >
                      {price}
                    </Typography>
                    <Typography
                      sx={{
                        color: "#9e9e9e",
                        display: "flex",
                        gap: 1,
                        fontSize: "12px",
                      }}
                    >
                      <s>{disPrice}</s>
                      {discount}
                    </Typography>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default FlashSale;
