import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => ({
  movie: {
    padding: "10px",
  },
  links: {
    alignItems: "center",
    fontWeight: "bolder",
    [theme.breakpoints.up("xs")]: {
      display: "flex",
      flexDirection: "column",
      textDecoration: "none",
    },
    "&:hover": {
      cursor: "pointer",
    },
  },
  image: {
    borderRadius: "20px",
    height: "300px",
    marginBottom: "10px",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  title: {
    color: theme.palette.text.primary,
    textOverflow: "ellipsis",
    width: "230px",
    whiteSpace: "hidden",
    marginTop: "10px",
    marginBottom: "0px",
    textAlign: "center",
  },
}));

export default useStyles;
