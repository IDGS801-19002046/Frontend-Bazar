import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/Home";
import Items from "./components/Items";
import Detail from "./components/Detail";
import Sales from "./components/Sales";
import { ItemsProvider } from './context/Items/ItemsState';

const App = () => {
    return (
      <ItemsProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/items" element={<Items />} />
            <Route path="/item/:id" element={<Detail />} />
            <Route path="/sales" element={<Sales />} />
          </Routes>
        </Router>
      </ItemsProvider>
      
    );
}

export default App;
