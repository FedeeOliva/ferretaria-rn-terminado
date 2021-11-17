import {
    GET_PRODUCTS_INIT,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAIL,
    GET_PRODUCT_INIT,
    GET_PRODUCT_SUCCESS,
    GET_PRODUCT_FAIL,
    CREATE_PRODUCT_INIT,
    CREATE_PRODUCT_SUCCESS,
    CREATE_PRODUCT_FAIL,
    EDIT_PRODUCT_INIT,
    EDIT_PRODUCT_SUCCESS,
    EDIT_PRODUCT_FAIL,
    DELETE_PRODUCT_INIT,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_FAIL
} from '../types';

export default (state, action) => {
	switch(action.type){
		case GET_PRODUCTS_INIT:
		case GET_PRODUCT_INIT:
		case CREATE_PRODUCT_INIT:
		case EDIT_PRODUCT_INIT:
		case DELETE_PRODUCT_INIT:
			return{
				...state,
				isLoading: true,
				error: false,
			}
        case GET_PRODUCTS_FAIL:
        case GET_PRODUCT_FAIL:
        case CREATE_PRODUCT_FAIL:
        case EDIT_PRODUCT_FAIL:
        case DELETE_PRODUCT_FAIL:
			return{
				...state,
				isLoading: false,
				error: action.payload
			}
		case GET_PRODUCTS_SUCCESS:
			return{
				...state,
				products: action.payload,
				isLoading: false,
				error: false
			}
		case CREATE_PRODUCT_SUCCESS:
			return{
				...state,
				products: state.products.concat(action.payload),
				isLoading: false,
				error: false
			}
		
		case DELETE_PRODUCT_SUCCESS:
			return{
				...state,
				products: state.products.filter( product => product.id != action.payload),
				isLoading: false,
				error: false
			}
		case EDIT_PRODUCT_SUCCESS:
			return{
				...state,
				products: state.products.map( product => product.id == action.payload.id ? action.payload : product),
				isLoading: false,
				productToEdit: null,
				error: false
			}
		default:
			return state;
	}
}