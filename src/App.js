import Home from "./components/Home/Home";
import { Routes, Route} from "react-router-dom";
import NavBar from "./components/Navbar/NavBar";
import MovieList from "./components/MovieList/MovieList"
import FavList from './components/FavList/FavList'


function App() {

 return(
  <>
  <NavBar/>
  <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path='/FavList' element={<FavList />}></Route>
    <Route path='/trending' element={<MovieList />}>
    </Route>

  </Routes>

  </>
 );
}

export default App;
