import ItemsContext from '../context/Items/ItemsContext';
import { useContext, useState } from 'react';
import './Home.css'
import { useNavigate } from 'react-router-dom';


const Home = () => {
    const {getItems, getSales} = useContext(ItemsContext);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearch = () => {
        const data = { q: searchTerm };
        getItems(data);
        navigate("/items"); 
    };

    const handleSales = () => {
        getSales()
        navigate("/sales");
    }

    return (
      <section className="flex items-center justify-center min-h-screen bg-gray-100">
  
          <div className="text-center">
              <figure className="max-w-lg">
                <img className="h-auto max-w-full rounded-lg mb-6 mx-auto img-300" src="/store-front.png" alt="image description"></img>
                <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">Bazar Online</figcaption>
              </figure>
  
              <input type="text" 
              placeholder="Buscar..." 
              className="p-2 border border-gray-300 rounded-lg w-full max-w-md"
              value={searchTerm}
              onChange={handleInputChange} />
  
              <button className="mt-4 px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-600" onClick={handleSearch}>
                  Buscar Producto
              </button>
              <button className="mt-4 px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-600" onClick={() => handleSales()}>
                  Mis compras
              </button>
          </div>
      </section>
    );
  }
  
  export default Home;