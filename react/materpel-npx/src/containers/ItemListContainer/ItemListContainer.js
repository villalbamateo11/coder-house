import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';

function ItemListContainer({papel, carton, planilla}) {

    return (
        <div className="contenedor">
            <h2>{ papel }</h2>
            <h2>{ carton }</h2>
            <h2>{ planilla }</h2>
            <ItemList />
        </div>
    )}

export default ItemListContainer