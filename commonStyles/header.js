import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  header: {
    display: "flex",
    alignItems: "flex-end",
    height: "120px",
  },
  container: {
    padding: 0,
    display: "flex",
    alignItems: "center",
  },
  iconButton: {
    margin: "13px",
  },
  title: {
    textTransform: "capitalize",
  },
});

export default useStyles;
