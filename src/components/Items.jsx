import { useContext, useState } from "react";
import ItemsContext from "../context/Items/ItemsContext";
import { useNavigate } from "react-router-dom";

const Items = () => {
    const {items, getItems} = useContext(ItemsContext);
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');

    if (!items || items.length === 0) {
        return <div>No products found.</div>;
    }

    const getDetail = (id) => {
        navigate(`/item/${id}`);
    };

    const handleInputChange = (e) => {
      setSearchTerm(e.target.value);
    };

    const handleSearch = () => {
      const data = { q: searchTerm };
      getItems(data);
      navigate("/items"); 
  };
    
  return (
    <>
    <section className="flex flex-col items-center justify-center bg-gray-100 p-6">
  <input
    type="text"
    placeholder="Buscar..."
    className="p-2 border border-gray-300 rounded-lg w-full max-w-md"
    value={searchTerm}
    onChange={handleInputChange}
  />
  
  <button
    className="mt-4 px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-600"
    onClick={handleSearch}
  >
    Buscar
  </button>
</section>

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
                            <img src={item.thumbnail} alt={item.thumbnail} style={styles.image} />
                            <h3 style={styles.name}>{item.title}</h3>
                            <p style={styles.price}>${item.price}</p>
                            <p style={styles.price}>{item.tag}</p>
                        </div>
                    </a>
                ))
            }
        </div>
    </section>
    </>
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
  
  
  export default Items;