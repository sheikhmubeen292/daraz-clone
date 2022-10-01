import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import StarBorderPurple500Sharp from "@mui/icons-material/StarBorderPurple500Sharp";
import { Avatar, Box, CardActionArea } from "@mui/material";
const CategotyCard = ({ cardItem }) => {
  return (
    <Box py={2} height="30%">
      <Card sx={{ maxWidth: 345 }} className="bs">
        <CardActionArea>
          <CardMedia
            component="img"
            height="150px"
            image={cardItem.imgsrc}
            alt="green iguana"
            sx={{ width: "100%" }}
          />
          <CardContent>
            <Avatar
              variant="square"
              src={cardItem.imgsrc}
              sx={{ border: "1px solid red" }}
              sizes="small"
            ></Avatar>
            <Typography
              mt={2}
              gutterBottom
              color="#87B5EC"
              variant="p"
              component="div"
            >
              {cardItem.des}
            </Typography>
            <Typography variant="body2" color="#F57647">
              Rs.{cardItem.price}
            </Typography>
            <Typography variant="body2" color="#9A9A9A">
              <del style={{ marginRight: "0.5rem", marginTop: "1rem" }}>
                Rs.{cardItem.delprice}
              </del>
              {cardItem.percent}
            </Typography>
            <Typography variant="body2" color="">
              {[1, 2, 3, 4, 5].map(() => {
                return <StarBorderPurple500Sharp />;
              })}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};

export default CategotyCard;
