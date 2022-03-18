import { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import './ItemDetailContainer.css';
import getItem from '../../helpers/getFetch';
import { useParams } from 'react-router-dom';


function ItemDetailContainer() {
    const [loading, setLoading] = useState(true)
    const [prod, setProd] = useState([])
    const { detalleId } = useParams()
  
    
    useEffect(() => {
      getItem()
        .then((res) =>{
          detalleId?
           setProd(res.find( (product)=> product.id === detalleId))
          :
          setProd(res)
        })
        .catch((err) => console.log(err)) 
        .finally(()=>{
        setLoading(false)
      })
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