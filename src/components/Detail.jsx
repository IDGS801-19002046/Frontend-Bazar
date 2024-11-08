import { useContext, useEffect, useState } from "react";
import ItemsContext from "../context/Items/ItemsContext";
import { useNavigate, useParams } from "react-router-dom";

const Detail = () => {

    const { selectedItem, getDetail, addSale, getItems } = useContext(ItemsContext);
    const { id } = useParams();
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        getDetail(id);
    }, []);

    const add = (id) => {
        const data = {'product_id': id}
        addSale(data)
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
        {
            selectedItem ? (
                <div style={styles.container}>
                    <img src={selectedItem.thumbnail} alt={selectedItem.title} style={styles.image} />
                    <h2 style={styles.title}>{selectedItem.title}</h2>
                    <p style={styles.description}>{selectedItem.description}</p>
                    <p style={styles.price}>${selectedItem.price}</p>
                    <p style={styles.price}>Rating {selectedItem.rating}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="40" viewBox="0 0 100 20">
                    <g fill="gold">
                        <polygon points="10,0 12,7 19,7 13,11 15,18 10,14 5,18 7,11 1,7 8,7" />
                        <polygon points="30,0 32,7 39,7 33,11 35,18 30,14 25,18 27,11 21,7 28,7" />
                        <polygon points="50,0 52,7 59,7 53,11 55,18 50,14 45,18 47,11 41,7 48,7" />
                        <polygon points="70,0 72,7 79,7 73,11 75,18 70,14 65,18 67,11 61,7 68,7" />
                        <polygon points="90,0 92,7 99,7 93,11 95,18 90,14 85,18 87,11 81,7 88,7" />
                    </g>
                    </svg>
                    <br />
                    <button className="mt-4 px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-600" 
                    onClick={() => add(selectedItem.id)}>Comprar</button>
                </div>
            ) : (
                <h1>No has seleccionado algún producto </h1>
            )
        }
        </>

        

        
    );
  }

  const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        maxWidth: '600px',
        margin: '20px auto'
    },
    image: {
        maxWidth: '100%',
        height: 'auto',
        borderRadius: '8px',
        marginBottom: '20px'
    },
    title: {
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#333',
        marginBottom: '10px'
    },
    description: {
        fontSize: '16px',
        color: '#555',
        lineHeight: '1.5',
        marginBottom: '20px'
    },
    price: {
        fontSize: '18px',
        fontWeight: 'bold',
        color: '#007bff',
        marginBottom: '20px'
    },
    button: {
        padding: '10px 15px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        textAlign: 'center',
        fontSize: '16px'
    }
};
  
  export default Detail;