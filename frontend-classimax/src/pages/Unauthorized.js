import { Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
const Unauthorized = () => {
  const navigate = useNavigate();
  const headBack = () => navigate(-1);
  return (
    <div style={{ textAlign: "center",marginTop:'100px' }}>
      <Typography variant="h3" color="error">Unauthorized!</Typography>
      <Typography variant="h6">You have no access to this page</Typography>
      <Button variant="contained" onClick={headBack}>
        Go Back
      </Button>
    </div>
  );
};

export default Unauthorized;
