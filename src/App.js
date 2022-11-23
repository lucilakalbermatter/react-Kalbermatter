import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';


function App() {
  return (
    <div className="App">
      <NavBar logo="/img/logo.png"/>
      <ItemListContainer text="¡Bienvenid@ a CelesteCarmín joyas!" />
    </div>
  );
}

export default App;
