import React from "react";
import { makeStyles } from "@mui/styles";
import { Grid, Typography } from "@mui/material";
import CategoryItem from "./CategoryItem";
import {CategoriesData} from './Data'
const useStyles = makeStyles({
  section: {
    background: "white",
    textAlign: "center",
    padding:"40px",
    paddingTop: "64px",
    paddingBottom: "64px",
  },
  sectionTitle: {
    marginBottom: "32px",
  },

});
const CategorySection = () => {
  const classes = useStyles();

  const categories = CategoriesData;

  return (
    <section className={classes.section}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className={classes.sectionTitle}>
              <Typography variant="h4">All Categories</Typography>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Perferendis, provident!
              </Typography>
            </div>
            <Grid container spacing={2}>
              {categories.map((category, index) => (
                <Grid
                  key={index}
                  item
                  xs={6} // On small screens, display 2 items in a row (12/6 = 2)
                  sm={3} // On larger screens, display 4 items in a row (12/3 = 4)
                >
                  <CategoryItem {...category} />
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
