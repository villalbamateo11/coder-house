import './ItemDetail.css';

const ItemDetail = ({ prod }) => {


      return (
        <section>
        <p>{prod.title}</p>
        <img src={prod.pictureURL} alt={prod.title}></img>
        <p>{prod.description}</p>
        <p>${prod.price}</p>
        </section>
      )
    }

export default ItemDetail