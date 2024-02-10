import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import FourOhFour from "./views/FourOhFour"
import Pokemon from "./views/Pokemon";
import PokemonDetails from "./views/PokemonDetails";

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={ <Home /> }/>
      <Route path='/pokemon' element={ <Pokemon /> }/>
      <Route path='/pokemon/:id' element={ <PokemonDetails />} />
      <Route path='*' element={ <FourOhFour /> }/>
    </Routes>
    </>
  )
}

export default App
