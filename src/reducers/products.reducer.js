import {GET_PRODUCTS} from "../actionsConstants"


const productsReducer = (state=[], action) =>{
   switch (action.type) {
       case GET_PRODUCTS:
            return [...action.payload];
    default:
        return state;
   }
    
};

export default productsReducer