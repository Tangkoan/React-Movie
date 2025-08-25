import {CssBaseline} from '@mui/material';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Movies from './Components/Movies/Movies';
import Actors from './Components/Actors/Actors';
import NavBar from './Components/NavBar/NavBar';
import MovieInformation from './Components/MovieInformation/MovieInformation';
import NotFound from './Components/NotFound/NotFound';
import Profile from './Components/Profile/Profile';

const App = () => {
 return (
   <div>
     <CssBaseline />
     <BrowserRouter>
       <NavBar />
       <main>
         <div>
           <Routes>
             <Route path="/movie/:id" element={<MovieInformation />} />
             <Route path="/" element={<Movies />} />
             <Route path="/actors/:id" element={<Actors />} />
             <Route path='/profile/:id' element={<Profile/>}/>
             <Route path="*" element={<NotFound />} />
           </Routes>
         </div>
       </main>
     </BrowserRouter>
   </div>
 );
}
export default App;