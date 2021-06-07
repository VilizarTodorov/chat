import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
  link: {
    color: "#68bbe4",
    wordBreak: "break-all",
    "&:hover": {
      textDecoration: "underline",
    },
  },
});

export default useStyles;
