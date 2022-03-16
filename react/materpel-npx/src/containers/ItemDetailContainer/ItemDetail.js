import ItemCount from '../../components/ItemCount/ItemCount';
import './ItemDetail.css';

const ItemDetail = ({ prod }) => {

  const onAdd = (count) =>{
    console.log(`Se añadio al carrito ${count} productos`)
}

      return (
        <div className='detalle'>
          <div>
            <img  className='detalle__img' src={prod.pictureURL} alt={prod.title}></img>
          </div>
          <div className='detalle__datos'>
            <div>
              <p>{prod.title}</p>
              <p>{prod.description}</p>
              <p>${prod.price}</p>
            </div>
            <div>
              <ItemCount stock={prod.stock} initial={1} onAdd={onAdd}/>
            </div>
          </div>
          
        </div>
        
      )
    }

export default ItemDetail