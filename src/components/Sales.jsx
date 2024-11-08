import { useContext } from "react";
import ItemsContext from "../context/Items/ItemsContext";
import { useNavigate } from "react-router-dom";

const Sales = () => {
  const {items} = useContext(ItemsContext);
  const navigate = useNavigate();

  if (!items || items.length === 0) {
      return <div>No products found.</div>;
  }

  const getDetail = (id) => {
      navigate(`/item/${id}`);
  };
  
return (
  <section>
    <h2 className="text-2xl font-semibold text-gray-800 text-center">Mis compras</h2>
    <section className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className='list-group h-100'>
          {
              items.map(item => (
                  <a
                  className="list-group-item list-group-item-action d-flex flex-row justify-content-between align-items-justify"
                  href="#"
                  key={item.id}
                  onClick={(e) => {e.preventDefault(); getDetail(item.id);}}
                  >
                      <div style={styles.card}>
                          <img src={item.product.thumbnail} alt={item.product.thumbnail} style={styles.image} />
                          <h3 style={styles.name}>{item.product.title}</h3>
                          <p style={styles.price}>${item.product.price}</p>
                          <p style={styles.price}>{item.product.tag}</p>
                      </div>
                  </a>
              ))
          }
      </div>
  </section>
  </section>
)

}

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    textAlign: 'center',
    width: '200px',
    margin: '10px'
  },
  image: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '8px 8px 0 0'
  },
  name: {
    fontSize: '18px',
    margin: '10px 0'
  },
  price: {
    fontSize: '16px',
    color: '#888'
  },
};
  
  export default Sales;