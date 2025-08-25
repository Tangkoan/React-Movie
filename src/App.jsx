import { CssBaseline } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Root, Content, ToolbarSpacer } from "./styles";
import NavBar from "./Components/NavBar/NavBar";
import Movies from "./Components/Movies/Movies";
import Actors from "./Components/Actors/Actors";
import MovieInformation from "./Components/MovieInformation/MovieInformation";
import NotFound from "./Components/NotFound/NotFound";
import Profile from "./Components/Profile/Profile";

const App = () => {
  return (
    <Root>
      <CssBaseline />
      <BrowserRouter>
        <NavBar />
        <Content>
          <ToolbarSpacer />
          <Routes>
            <Route path="/movie/:id" element={<MovieInformation />} />
            <Route path="/" element={<Movies />} />
            <Route path="/actors/:id" element={<Actors />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Content>
      </BrowserRouter>
    </Root>
  );
};

export default App;
