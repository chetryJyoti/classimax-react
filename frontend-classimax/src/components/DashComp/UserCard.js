import React from "react";
import {
  Card,
  Box,
  Avatar,
  Typography,
  CardActions,
  CardContent,
  Button,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const useStyles = makeStyles(() => ({
  cardStyle: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
}));
const UserCard = ({useDetails}) => {
  const classes = useStyles();
  const notify = () => toast("Editing profile!");
  
  return (
    <Box sx={{ width: "100%" }}>
      <Card variant="outlined" className={classes.cardStyle}>
        <CardContent className={classes.cardStyle}>
          <Avatar sx={{ width: 100, height: 100, bgcolor: "gray" }}>
            <Typography variant="h4">J</Typography>
          </Avatar>
          <Typography variant="h6" color="text.secondary" gutterBottom>
           {useDetails.username}
          </Typography>
          <Typography sx={{ fontSize: 14 }} component="div">
            {useDetails.email}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={notify} size="small" variant="contained">
            Edit Profile
          </Button>
          <ToastContainer
            position="top-right"
            autoClose={500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </CardActions>
      </Card>
    </Box>
  );
};

export default UserCard;
