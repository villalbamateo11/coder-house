import { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import './ItemDetailContainer.css';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from "firebase/firestore";


function ItemDetailContainer() {
    const [loading, setLoading] = useState(true)
    const [prod, setProd] = useState([])
    const { detalleId } = useParams()
  
    useEffect(() => {
      const db = getFirestore()
      const queryDb = doc(db, 'items', detalleId)
      getDoc(queryDb)
      .then(resp => setProd( { id: resp.id, ...resp.data() } )) 
      .catch(err => console.log(err))
      .finally(()=> setLoading(false))

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