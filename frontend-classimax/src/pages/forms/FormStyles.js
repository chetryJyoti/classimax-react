import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    formContainer: {
      border: "1px solid #ccc",
      padding: "3rem",
      marginBottom: "1rem",
    },
    formField: {
      marginBottom: "1rem",
      background: "white",
    },
  
    priceRow: {
      display: "flex",
      alignItems: "center",
      marginBottom: "1rem",
    },
    uploadContainer: {
      border: "1px dashed #ccc",
      padding: "1rem",
      borderRadius: "4px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      textAlign: "center",
      marginTop: "28px",
      height: "200px",
    },
  });

export default useStyles;
