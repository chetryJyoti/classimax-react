import React from "react";
import {
  Card,
  Typography,
  CardActions,
  CardContent,
  Button,
  Grid,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const useStyles = makeStyles(() => ({
  cardStyle: {
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
}));

const UserAdsCard = ({productInfo}) => {
  
  const classes = useStyles();

  return (
    <div style={{ marginBottom: "16px" }}>
      <Card variant="outlined" className={classes.cardStyle}>
        <CardContent>
          <Grid container spacing={1}>
            <Grid item xs={12} md={4}>
              <img
                src={productInfo.imgSrc}
                alt="Product"
                style={{ maxWidth: "100%", width: "80%", height: "auto" }}
              />
            </Grid>
            <Grid item xs={12} md={5}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                <span>{productInfo.productTitle}</span>
              </Typography>
              <Typography variant="subtitle1" color="text.primary" gutterBottom>
                Category:
                <span>{productInfo.category}</span>
              </Typography>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Product id:<span>{productInfo.productId}</span> <br />
                Posted On:<span>{productInfo.postedOn}</span> <br />
                Status:<span>{productInfo.status}</span> <br />
                Location:<span>{productInfo.location}</span> <br />
              </Typography>
            </Grid>
            <Grid item xs={12} md={3}>
              <CardActions>
                <Button size="small" variant="outlined">
                  <EditIcon />
                  Edit
                </Button>
                <Button size="small" variant="outlined" color="error">
                  <DeleteIcon />
                  Delete
                </Button>
              </CardActions>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserAdsCard;
