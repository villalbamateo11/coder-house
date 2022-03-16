import { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import './ItemDetailContainer.css';
import getItem from '../../helpers/getFetch';
import { useParams } from 'react-router-dom';


function ItemDetailContainer() {
    const [loading, setLoading] = useState(false)
    const [prod, setProd] = useState([])
    const { detalleId } = useParams()
  
    
    useEffect(() => {
      if (detalleId) {
      getItem( )
        .then(res => setProd(res.find(product => product.id === detalleId)))
        .catch(err => console.log(err)) 
      } else {
        setLoading(true)
      }
      }, [detalleId])
  
    return (
      <div>
        <>
          {
            loading
              ?
              <div>
                <p>Cargando...</p>
              </div>
              :
                <ItemDetail key={prod.id} prod={prod} />
          }
        </>
      </div>
    )
  }
  
  export default ItemDetailContainer