import { styled } from "@mui/material/styles";



export default styled((theme) => ({
  toolbar: {
    display: "flex",
    height: "80px",
    justifyContent: "space-between",
    marginLeft: "240px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0",
      flexWrap: "wrap",
    },
  },
}));