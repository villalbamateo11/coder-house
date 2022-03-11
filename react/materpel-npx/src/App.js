import './App.css';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';

function App() {

  return (
    <div>
    <NavBar />
    <ItemListContainer productos='Productos' historia='Quienes Somos' producción='Que hacemos'/>
    <ItemDetailContainer />
    </div>
  );
}

export default App;