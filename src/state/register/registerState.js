import React, {useReducer } from 'react';
import registerContext from './registerContext';
import registerReducer from './registerReducer';
import Axios from '../../config/axiosClient';

import {
    GET_REGISTERS_INIT,
    GET_REGISTERS_SUCCESS,
    GET_REGISTERS_FAIL,
    GET_REGISTER_INIT,
    GET_REGISTER_SUCCESS,
    GET_REGISTER_FAIL,
    CREATE_REGISTER_INIT,
    CREATE_REGISTER_SUCCESS,
    CREATE_REGISTER_FAIL,
    EDIT_REGISTER_INIT,
    EDIT_REGISTER_SUCCESS,
    EDIT_REGISTER_FAIL,
    DELETE_REGISTER_INIT,
    DELETE_REGISTER_SUCCESS,
    DELETE_REGISTER_FAIL,
} from '../types';


const initialState = {
    products: [],
    error: false,
    isLoading: true
}

const RegisterState = props => {
    const [state, dispatch] = useReducer(registerReducer, initialState);

    const getRegisters = async () => {
        dispatch({type: GET_REGISTERS_INIT});
        
        try{
            const {data: registers} = await Axios.get('/api/registers');
            
            dispatch({
                type: GET_REGISTERS_SUCCESS,
                payload: registers
            });
        }catch(err){
            console.log(err)
            dispatch({
                type: GET_REGISTERS_FAIL,
                payload: `Error al obtener los registros`
            })
        }
    }

    const getRegister = async (id) => {
        dispatch({type: GET_REGISTER_INIT});
        
        try{
            const {data: register} = await Axios.get(`/api/registers/${id}`);
            
            dispatch({
                type: GET_REGISTER_SUCCESS,
                payload: register
            });
        }catch(err){
            console.log(err)
            dispatch({
                type: GET_REGISTER_FAIL,
                payload: `Error al obtener el registro`
            })
        }
    }

    const createRegister = async register => {
        dispatch({type: CREATE_REGISTER_INIT});
        
        try{
            const {data} = await Axios.post(`/api/registers`, register);
            dispatch({
                type: CREATE_REGISTER_SUCCESS,
                payload: data
            });
        }catch(err){
            console.log(err)
            dispatch({
                type: CREATE_REGISTER_FAIL,
                payload: `Error al crear el registro`
            })
        }
    }

    const deleteRegister = async (id) => {
        dispatch({type: DELETE_REGISTER_INIT});
        
        try{
            const {data} = await Axios.delete(`/api/registers/${id}`);
            dispatch({
                type: DELETE_REGISTER_SUCCESS,
                payload: id
            });
        }catch(err){
            console.log(err)
            dispatch({
                type: DELETE_REGISTER_FAIL,
                payload: `Error al eliminar registro`
            })
        }
    }

    const editRegister = async register => {
        dispatch({type: EDIT_REGISTER_INIT});
        
        try{
            const {data} = await Axios.put(`/api/register/${register.id}`,register);
            
            dispatch({
                type: EDIT_REGISTER_SUCCESS,
                payload: register
            });
        }catch(err){
            console.log(err)
            dispatch({
                type: EDIT_REGISTER_FAIL,
                payload: `Error al editar el registro`
            })
        }
    }


    return(
        <registerContext.Provider
            value={{
                registers: state.registers,
                error: state.error,
                isLoading: state.isLoading,
                getRegister,
                getRegisters,
                createRegister,
                editRegister,
                deleteRegister
            }}
        >
            {props.children}
        </registerContext.Provider>
    )
}

export default RegisterState;