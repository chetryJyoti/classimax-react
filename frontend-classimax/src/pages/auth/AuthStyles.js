import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  formContainer: {
    display: "flex",
    flexDirection: "column",
    border: "1px solid #F5F5F5",
    margin: "30px 50px",
  },
  formField: {
    textAlign: "center",
    marginBottom: "18px",
  },
  submitButton: {
    marginTop: "1rem",
  },
  header: {
    background: "#F5F5F5",
    textAlign: "center",
    padding: "18px",
    marginBottom: "18px",
  },
  down: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
    textDecoration: "none",
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
});
export default useStyles;
