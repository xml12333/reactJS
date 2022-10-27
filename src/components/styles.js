import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => ({
  root: {
    display: "flex",
    height: "100%",
  },
  toolbar: {
    height: "70px",
  },
  content: {
    width: "calc(100% - 240px)",
    flexGrow: 1,
    padding: "2em",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

export default useStyles;
