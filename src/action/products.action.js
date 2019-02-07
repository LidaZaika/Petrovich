import {GET_PRODUCTS} from "../actionsConstants"
import items from "../reducers/products"


export const getProducts = (dispatch) =>{

        dispatch({
            type: GET_PRODUCTS,
            payload: items
        });

};
