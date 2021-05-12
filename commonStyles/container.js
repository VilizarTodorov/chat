import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    position: "absolute",
    top: 0,
    left: "-100%",
    padding: 0,
    zIndex: 20,
    height: "100%",
    transition: "all 0.4s",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#131c21",
  },
  active: {
    left: 0,
  },
});

export default useStyles;
