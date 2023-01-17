import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { CarritoContextProvider } from "./contexto/carritoContext";
import CartView from './components/CartContainer/CartContainer';
import { obtenerProductos, exportItemsToFirestore } from "./servicios/firebase";

function App() {
  obtenerProductos();
  return (
    <CarritoContextProvider>
      <BrowserRouter>
        {/* Descomentar y presionar en exportar para enviar items a firebase */}
        {/* <button onClick={exportItemsToFirestore}>Exportar items a firebase!</button> */}
        <NavBar logo="/img/logo.png"/>
        <Routes>
          <Route path="/" element={<ItemListContainer text="¡Bienvenid@ a CelesteCarmín joyas!"/>}/>
          <Route path="/category/:id" element={<ItemListContainer/>} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartView />} />
          <Route path="*" element={ <h1>404: no encontrado</h1>} />
        </Routes>
      </BrowserRouter>
    </CarritoContextProvider>
  );
}

export default App;
