export const productos = [
    {
      id: 1,
      title: 'Carton',
      description:'Carton suelto o tacho', 

      price: 31,
      stock: 200
    },
    {
      id: 2,
      title: 'Segunda',
      description:'Recortes de papel o papel diario', 

      price: 7,
      stock: 100
    },
    {
      id: 3,
      title: 'Fardo',
      description:'Carton fardo', 

      price: 35,
      stock: 110
    },
    {
      id: 4,
      title: 'Planilla',
      description: 'Planilla blanca', 

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