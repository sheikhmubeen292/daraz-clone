import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import bf2 from "./DarazImg/bf-2.jpg";
import shazz from "./DarazImg/shazz.jpeg";
import vitamin from "./DarazImg/vitamin.jpg";
import beauty from "./DarazImg/beauty.jpeg";
import sac from "./DarazImg/sac.jpg";
import sacLogo from "./DarazImg/sacLogo.jpeg";
import pediasure from "./DarazImg/pediasure.png";
import abboutt from "./DarazImg/abboutt.jpeg";
import capri from "./DarazImg/capri.jpg";
import capriLogo from "./DarazImg/capriLogo.jpeg";
import tapal from "./DarazImg/tapal.jpg";
import tapalLogo from "./DarazImg/tapalLogo.jpeg";

const DarazMall = () => {
  const card = [
    {
      img: bf2,
      logo: shazz,
      text1: "Shazz Supermarket",
      text2: "Shazz Supermarket",
    },
    {
      img: vitamin,
      logo: beauty,
      text1: "MissBeauty",
      text2: "MissBeauty",
    },
    {
      img: sac,
      logo: sacLogo,
      text1: "SAC",
      text2: "OFFICAL STORE",
    },
    {
      img: pediasure,
      logo: abboutt,
      text1: "Abbott",
      text2: "Abbott",
    },
    {
      img: capri,
      logo: capriLogo,
      text1: "Capri",
      text2: "Capri",
    },
    {
      img: tapal,
      logo: tapalLogo,
      text1: "Tapal",
      text2: "Truly yours",
    },
  ];
  return (
    <div>
      <Box>
        <Container>
          <Typography
            sx={{
              fontFamily: "Roboto-Regular",
              fontSize: "22px",
              color: "#424242",
              fontWeight: 400,
              my: "20px",
            }}
          >
            DarazMall
          </Typography>
          <Grid container>
            {card.map(({ img, text1, text2, logo }) => {
              return (
                <Grid
                  item
                  xs={12}
                  sm={3}
                  md={2}
                  sx={{
                    display: "flex",
                    alignItem: "center",
                    // justifyContent: "space-around",
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      width: "95%",
                      bgcolor: "#fff",
                      boxShadow: "0 0 4px 0 rgb(0 0 0 / 25%)",
                      "&:hover": {
                        boxShadow: "0 0 4px 0 rgb(0 0 0 / 85%)",
                        cursor: "pointer",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        background:
                          "linear-gradient(to bottom,rgba(0,0,0,0) 0,rgba(0,0,0,.5) 100%)",
                      }}
                    >
                      <img src={img} alt="" width="100%" />
                    </Box>

                    <Box
                      sx={{
                        py: "25px",
                        display: "flex",
                        alignItem: "center",
                        flexDirection: "column",
                        justifyContent: "center",
                        textAlign: "center",
                        backgroundColor: "white",
                      }}
                    >
                      <Typography sx={{ fontSize: "15px", color: "#212121" }}>
                        {text1}
                      </Typography>
                      <Typography sx={{ fontSize: "12px", color: "#9e9e9e" }}>
                        {text2}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItem: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Box
                        sx={{
                          p: 1,
                          bgcolor: "#fff",
                          boxShadow: "0 0 4px 0 rgb(0 0 0 / 25%)",
                          height: "40px",
                          width: "40px",
                          display: "flex",
                          alignItem: "center",
                          justifyContent: "center",
                          position: "absolute",
                          mt: "-125px",
                          //   ml: "70px",
                        }}
                      >
                        <img src={logo} alt="bf2" />
                      </Box>
                    </Box>
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

export default DarazMall;
