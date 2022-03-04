import { useState, useEffect } from "react";
import Item from "./Item"
import { getFetch } from '../../helpers/getFetch';
import './ItemList.css';


function ItemList() {

    const [combos, setCombos] = useState([])
    const [loading, setLoading] = useState(true)

useEffect(() => {
        getFetch
        .then((respuesta)=> {
            return respuesta
        })
        .then((resp) => setCombos(resp))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
    }, [])

  return (
      <div className="ItemList">
            <>
                {   loading ? <h1 className="loading">Cargando...</h1>
                            :
                            combos.map((prod) => 
                                <Item items={ prod }  />
                            )
                }
            </>

      </div>       
  )
}

export default ItemList