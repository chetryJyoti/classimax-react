import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "white",
    padding: "10px",
    marginTop: "20px",
  },
  toolbar: { backgroundColor: "white",display:"flex",justifyContent:"space-around",

},
  icon: { color: "black", marginRight: "10px" },
  typo: { color: "black" },
  buttons: { marginTop: "10px" },
  cardGrid: { marginTop: "10px" },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    gap:1
  },
  cardAction:{
    marginBottom:"4px"
  },
  dropdown:{
    border:"none !important"
  }
}));

export default useStyles;
