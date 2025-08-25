import { styled } from "@mui/material/styles";

const drawerWidth = 240;

export const Root = styled("div")({
  display: "flex",
  height: "100%",
});

export const Content = styled("main")(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  marginLeft: drawerWidth,
  width: `calc(100% - ${drawerWidth}px)`,
  [theme.breakpoints.down("sm")]: {
    marginLeft: 0,
    width: "100%",
  },
}));

export const ToolbarSpacer = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));
