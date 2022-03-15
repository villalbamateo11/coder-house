export const productos = [
    {
      id: 1,
      title: 'Carton',
      description:'Carton suelto o tacho', 
      pictureURL:'https://www.trupal.com.pe/blog/wp-content/uploads/2020/12/En-qu%C3%A9-consiste-el-ciclo-de-vida-de-un-empaque-de-cart%C3%B3n.jpg',
      price: 31,
      stock: 200
    },
    {
      id: 2,
      title: 'Segunda',
      description:'Recortes de papel o papel diario', 
      pictureURL: 'https://conceptodefinicion.de/wp-content/uploads/2017/04/Papel.jpg',
      price: 7,
      stock: 100
    },
    {
      id: 3,
      title: 'Fardo',
      description:'Carton fardo', 
      pictureURL: 'https://c.pxhere.com/photos/cb/d5/cardboard_recycle_recycling_bale_cardboard_cardboard_bale-423435.jpg!s2',
      price: 35,
      stock: 110
    },
    {
      id: 4,
      title: 'Planilla',
      description: 'Planilla blanca', 
      pictureURL:'https://www.destrucciondedocumentos.es/wp-content/uploads/2019/08/g2_3_IMG_0376_opt-960x720.jpg',
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
  
    const getItem = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productos)
            }, 2000);
        })
    }
  
    export default getItem