import { useState, useEffect } from "react";
import { getFetch } from "../../helpers/getFetch";
import Detail from "./Detail";
import './ItemDetail.css';


function ItemDetail() {

    const [combos, setCombos] = useState([])
    const [loading, setLoading] = useState(true)

useEffect(() => {
        getFetch
        .then((respuesta)=> {
            return respuesta
        })
        .then((resp) => setCombos(resp.find(r => r.id === 1)))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
    }, [])

  return (
      <div>
            <>
                {   loading ? <h1>Cargando...</h1>
                            :
                            combos.map((prod) => 
                                <Detail details={ prod } />
                            )
                }
            </>

      </div>       
  )
}

export default ItemDetail