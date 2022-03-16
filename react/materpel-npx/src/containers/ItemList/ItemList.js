import { useState, useEffect } from "react";
import Item from "./Item"
import { getFetch } from '../../helpers/getFetch';
import './ItemList.css';
import { useParams } from "react-router-dom";


function ItemList() {

    const [combos, setCombos] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoriaId } = useParams()

useEffect(() => {

    if (categoriaId) {
        getFetch
        .then((respuesta)=> {
            return respuesta
        })
        .then((resp) => setCombos(resp.filter(prod => prod.categoria === categoriaId)))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))
    } else {
        getFetch
        .then((respuesta)=> {
            return respuesta
        })
        .then((resp) => setCombos(resp))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
    }
    }, [categoriaId])

  return (
      <div className="ItemList">
            <>
                {   loading ? <h1 className="loading">Cargando...</h1>
                            :
                            combos.map((prod) => 
                                <Item key={ prod.id } items={ prod }  />
                            )
                }
            </>

      </div>       
  )
}

export default ItemList