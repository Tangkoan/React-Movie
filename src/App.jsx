import {CssBaseline} from '@mui/material';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Movies from './Components/Movies/Movies';
import Actors from './Components/Actors/Actors';

const App = () => {
 return(
  <div>
    <CssBaseline/>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Movies/>}/>
            <Route path='/actors/:id' element={<Actors/>}/>
        </Routes>
    </BrowserRouter>
  </div>
 )
}
export default App;