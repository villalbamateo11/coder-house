import { useState, useEffect } from "react";
import Item from "./Item"
import './ItemList.css';
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs, where, query } from "firebase/firestore";


function ItemList() {

    const [combos, setCombos] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()

    useEffect(() => {
    const db = getFirestore()
    if (categoryId) {
        const queryCollection = collection(db, 'items')
        const queryFilter = query( queryCollection, where('categoryId', '==', categoryId) )
        getDocs(queryFilter)
        .then(resp => setCombos( resp.docs.map(item => ({ id: item.id, ...item.data()})) ))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
    } else {
        const queryCollection = collection(db, 'items')
        getDocs(queryCollection)
        .then(resp => setCombos( resp.docs.map(item => ({ id: item.id, ...item.data()})) ))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
    }

    }, [categoryId])

    

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