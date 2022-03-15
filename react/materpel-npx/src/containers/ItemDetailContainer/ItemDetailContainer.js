import { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import './ItemDetailContainer.css';
import getItem from '../../helpers/getFetch';


function ItemDetailContainer() {
    const [loading, setLoading] = useState(false);
    const [prod, setProd] = useState([]);
  
    
    useEffect(() => {
      setLoading(true)
      getItem( )
        .then(res => setProd(res.find(product => product.id === '1')))
        .finally(
          setLoading(false)
        )
      }, [])
  
    return (
      <>
        {
          loading
            ?
            <div>
              <h1>Cargando...</h1>
            </div>
            :
              <ItemDetail key={prod.id} prod={prod} />
        }
      </>
    )
  }
  
  export default ItemDetailContainer