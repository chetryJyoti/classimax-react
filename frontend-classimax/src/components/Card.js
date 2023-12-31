import React from "react";
import { Star } from "@mui/icons-material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import { makeStyles } from "@mui/styles";
import { Grid, Typography } from "@mui/material";
const useStyles = makeStyles({
  productItem: {
    background: "#fff",
    borderRadius: "8px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    padding: "16px",
    marginBottom: "32px",
    width: "98%",
  },
  cardImg: {
    width: "100%",
  },
  productMeta: {
    display: "flex",
    justifyContent: "space-between",
    margin: "16px 0",
  },
  productRatings: {
    display: "flex",
    justifyContent: "center",
    "& ul": {
      listStyle: "none",
      padding: 0,
      margin: 0,
      display: "flex",
      justifyContent: "center",
      "& li": {
        marginRight: "8px",
      },
    },
    marginTop: "10px",
  },
  ratingStars: {
    color: "blue",
    marginRight: "4px",
  },
  iconText: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

const Card = (option) => {
  const classes = useStyles();
  // console.log("option",option);
  return (
    <Grid item xs={12} sm={6} md={4}>
      <div className={classes.productItem}>
        <div className={classes.cardImg}>
          <img
            className={classes.cardImg}
            src={option.value}
            style={{ width: "200px", height: "130px" }}
            alt="Card image cap"
          />
        </div>
        <div>
          <Typography variant="h5">{option.name}</Typography>
          <div className={classes.productMeta}>
            <span className={classes.iconText}>
              <FolderOpenIcon fontSize="small" />
              {option.category}
            </span>
            <span className={classes.iconText}>
              <CalendarMonthIcon fontSize="small" />
              {option.date}
            </span>
          </div>
          <Typography variant="h6">Rs:{option?.price}</Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: {
                lg: 12,
                md: 11,
                sm: 10,
                xs: 10,
              },
              wordWrap: "break-word",
              width: "11rem",
            }}
          >
            {option.desc}
          </Typography>
          <div className={classes.productRatings}>
            <ul>
              {Array.from({ length: parseInt(option.rating) }).map(
                (_, index) => (
                  <li key={index}>
                    <Star className={classes.ratingStars} />
                  </li>
                )
              )}
              {Array.from({ length: 5 - parseInt(option.rating) }).map(
                (_, index) => (
                  <li key={index}>
                    <Star />
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </Grid>
  );
};

export default Card;
