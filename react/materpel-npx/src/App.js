import './App.css';
import ItemListContainer from './components/contenedor/ItemListContainer';

import NavBar from './components/NavBar/NavBar';

function App() {

  return (
    <div>
    <NavBar />
    <ItemListContainer productos='Productos' historia='Quienes Somos' producción='Que hacemos'/>
    </div>
  );
}

export default App;