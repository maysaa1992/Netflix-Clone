import Home from "./components/Home/Home";
import { Routes, Route} from "react-router-dom";
import NavBar from "./components/Navbar/NavBar";
import MovieList from "./components/MovieList/MovieList"


function App() {

 return(
  <>
  <NavBar/>
  <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path='/trending' element={<MovieList />}>
    </Route>

  </Routes>

  </>
 );
}

export default App;
