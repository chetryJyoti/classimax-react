import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  toolbar: {
    backgroundColor: "white",
    display: "flex",
    justifyContent: "space-around",
  },
  cardGrid: { marginTop: "10px" },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    gap: 1,
  },
  cardAction: {
    marginBottom: "4px",
  },
  // RESPONSIVE GIRD 

 

}));

export default useStyles;
