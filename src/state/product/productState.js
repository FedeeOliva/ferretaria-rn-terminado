import React, {useReducer } from 'react';
import productContext from './productContext';
import productReducer from './productReducer';
import Axios from '../../config/axiosClient';

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


const initialState = {
    products: [],
    error: false,
    isLoading: true
}

const ProductState = props => {
    const [state, dispatch] = useReducer(productReducer, initialState);

    const getProducts = async () => {
        dispatch({type: GET_PRODUCTS_INIT});
        
        try{
            const {data} = await Axios.get('/api/products');
            
            dispatch({
                type: GET_PRODUCTS_SUCCESS,
                payload: data.data
            });
        }catch(err){
            console.log(err)
            dispatch({
                type: GET_PRODUCTS_FAIL,
                payload: `Error al obtener productos`
            })
        }
    }

    const getProduct = async (id) => {
        dispatch({type: GET_PRODUCT_INIT});
        
        try{
            const {data: product} = await Axios.get(`/api/products/${id}`);
            
            dispatch({
                type: GET_PRODUCT_SUCCESS,
                payload: product
            });
        }catch(err){
            console.log(err)
            dispatch({
                type: GET_PRODUCT_FAIL,
                payload: `Error al obtener producto`
            })
        }
    }

    const createProduct = async (product) => {
        dispatch({type: CREATE_PRODUCT_INIT});
        
        try{
            const {data} = await Axios.post(`/api/products`, product);
            dispatch({
                type: CREATE_PRODUCT_SUCCESS,
                payload: data.data
            });
        }catch(err){
            console.log(err)
            dispatch({
                type: CREATE_PRODUCT_FAIL,
                payload: `Error al crear product`
            })
        }
    }

    const deleteProduct = async (id) => {
        dispatch({type: DELETE_PRODUCT_INIT});

        try{
            const {data} = await Axios.delete(`/api/products/${id}`);
            dispatch({
                type: DELETE_PRODUCT_SUCCESS,
                payload: id
            });
        }catch(err){
            console.log(err)
            dispatch({
                type: DELETE_PRODUCT_FAIL,
                payload: `Error al eliminar producto`
            })
        }
    }


    const editProduct = async product => {
        dispatch({type: EDIT_PRODUCT_INIT});
        
        try{
            const {data} = await Axios.put(`/api/products/${product.id}`,product);
            
            dispatch({
                type: EDIT_PRODUCT_SUCCESS,
                payload: product
            });
        }catch(err){
            console.log(err)
            dispatch({
                type: EDIT_PRODUCT_FAIL,
                payload: `Error al editar usuario`
            })
        }
    }


    return(
        <productContext.Provider
            value={{
                products: state.products,
                error: state.error,
                isLoading: state.isLoading,
                getProduct,
                getProducts,
                createProduct,
                editProduct,
                deleteProduct
            }}
        >
            {props.children}
        </productContext.Provider>
    )
}

export default ProductState;