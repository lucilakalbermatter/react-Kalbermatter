import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <NavBar logo="/img/logo.png"/>
      <Routes>
        <Route path="/" element={<ItemListContainer text="¡Bienvenid@ a CelesteCarmín joyas!"/>}/>
        <Route path="/category/:id" element={<ItemListContainer/>} />
        <Route path="/item/:id" element={<ItemDetailContainer />} /> 
        <Route path="*" element={ <h1>404: no encontrado</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
