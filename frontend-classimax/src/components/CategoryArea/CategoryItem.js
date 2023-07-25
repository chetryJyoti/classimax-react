import React from "react";
import { makeStyles } from "@mui/styles";
import { Card, CardContent, Typography } from "@mui/material";

const useStyles = makeStyles({
  header: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "20px",
    borderBottom: "3px solid #F4F7F9",
  },
  categoryIcon: {
    fontSize: "24px",
    marginRight: "8px",
    color: "white",
    borderRadius: "50%",
    padding: "1px 5px",
  },
  categoryCard: {
    background: "#fff",
    borderRadius: "8px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    marginBottom: "32px",
    padding: "6px",
  },
  categoryCardContent: {
    padding: "16px",
  },
});

const CategoryItem = ({ iconClass, title, items, background, boxShadow }) => {
  const classes = useStyles();

  return (
    <Card className={classes.categoryCard}>
      <CardContent className={classes.categoryCardContent}>
        <div className={classes.header}>
          {iconClass && (
            <div
              className={classes.categoryIcon}
              style={{ background, boxShadow }}
            >
              {iconClass}
            </div>
          )}

          <Typography variant="h6">{title}</Typography>
        </div>
        <Typography className="category-list">
          {items.map((item, index) => (
            <Typography
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                color: "gray",
                fontSize: "13px",
                borderBottom: "1px solid #F4F7F9",
                padding: "10px 0",
              }}
            >
              <span>{item.name} </span>
              <span>{item.count}</span>
            </Typography>
          ))}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CategoryItem;
