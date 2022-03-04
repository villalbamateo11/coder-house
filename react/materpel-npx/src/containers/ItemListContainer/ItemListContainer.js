import ItemCount from '../../components/ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';

function ItemListContainer({productos, comb, especiales}) {
    
    const onAdd = (count) =>{
        console.log(`Se añadio al carrito ${count} productos`)
    }

    return (
        <div className="contenedor">
            <h2>{ productos }</h2>
            <h2>{ especiales }</h2>
            <ItemCount stock={8} initial={1} onAdd={onAdd} />
            <h2>{ comb }</h2>
            <ItemList />
        </div>
    )}

export default ItemListContainer