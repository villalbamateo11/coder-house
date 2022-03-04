import carton from '../imagenes/carton1.jpeg'
import segunda from '../imagenes/carton2.jpeg'
import fardo from '../imagenes/fardo2.jpeg'
import planilla from '../imagenes/carton4.jpeg'




export const productos = [
    {
      id: 1,
      title: 'Carton',
      description:'Carton suelto o tacho', 
      img: {carton},
      price: 31,
      stock: 200
    },
    {
      id: 2,
      title: 'Segunda',
      description:'Recortes de papel o papel diario', 
      img: {segunda},
      price: 7,
      stock: 100
    },
    {
      id: 3,
      title: 'Fardo',
      description:'Carton fardo', 
      img: {fardo},
      price: 35,
      stock: 110
    },
    {
      id: 4,
      title: 'Planilla',
      description: 'Planilla blanca', 
      img: {planilla},
      price: 34,
      stock: 150
    },
  ]
  
  export const getFetch = new Promise((resolve, reject)=>{

      let url = 'materpel.com'

      if (url === 'materpel.com') {
        setTimeout(() => {
          resolve(productos)
        }, 2000);
      }else{
        reject('400 not found')
      }
    })