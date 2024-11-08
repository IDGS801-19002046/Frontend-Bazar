import { useReducer } from "react";
import ItemsReducer from "./ItemsReducer";
import axios from "axios";
import ItemsContext from "./ItemsContext";

const ItemsState = (props) => {
    const initialState = {
        items: [],
        selectedItem: null,
    };

    const [state, dispatch] = useReducer(ItemsReducer, initialState);

    const getItems = async (data) => {
        const res = await axios.get('https://web-production-362b7.up.railway.app/api/items', {
            params: data
        });

        dispatch({
            type: 'GET_ITEMS',
            payload: res.data
        });
        console.log("Acción enviada:", { type: 'GET_ITEMS', payload: res.data.data });
    }

    const getDetail = async (id) => {
        const res = await axios.get('https://web-production-362b7.up.railway.app/api/items/'+ id);
        dispatch({
            type: 'GET_DETAIL',
            payload: res.data
        })
    }

    const addSale = async (data) => {
        const res = await axios.post('https://web-production-362b7.up.railway.app/api/addSale', data)
        alert('Felicidades se ha realizado la compra')

        dispatch({
            type: 'ADD_SALE',
            payload: res.data
        })
    }

    const getSales = async () => {
        const res = await axios.get('https://web-production-362b7.up.railway.app/api/sales')

        console.log(res.data)

        dispatch({
            type: 'GET_SALES',
            payload: res.data
        });
    }

    return (
        <ItemsContext.Provider 
        value={{
            items: state.items,
            selectedItem: state.selectedItem,
            getItems,
            getDetail,
            addSale,
            getSales
        }}
        >
            {props.children}
        </ItemsContext.Provider>
    )
}

export { ItemsState as ItemsProvider };