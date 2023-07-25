import { makeStyles } from "@mui/styles";
import heroImage from ".././../assets/home/hero.jpg";
const useStyles = makeStyles(() => ({
    heroArea: {
      background: `url(${heroImage})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      textAlign: "center",
      color: "white",
      padding:"20px",
      paddingBottom:"0"
    },
    contentBlock: {
      marginTop: "60px",
      marginBttom: "50px",
    },
    h1header: {
    },
    popularCategoryList: {
      marginTop: "18px",
      marginBottom: "40px",
      "& ul": {
        listStyle: "none",
        padding: "14px",
        display: "flex",
        justifyContent: "center",
        "& li": {
          color: "gray",
          padding: "3px",
          marginRight: "4px",
          border: "1px solid gray",
          borderRadius: "3px",
          display: "flex",
          justifyContent: "center",
          cursor: "pointer",
        },
      },
    },
    advanceSearch: {
      marginTop: "10px",
      background: "#fff",
      padding: "40px 15px 25px 15px",
      borderRadius: "3px",
      marginBottom: "-50px",
      boxShadow: "-1px 3px 6px rgba(0, 0, 0, 0.12)",
    },

  }));

export default useStyles;
