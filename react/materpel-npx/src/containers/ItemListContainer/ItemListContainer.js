import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';

function ItemListContainer() {
    return (
        <div className="contenedor">
            <h2>{ Papel }</h2>
            <h2>{ Carton }</h2>
            <ItemList />
        </div>
    )}

export default ItemListContainer