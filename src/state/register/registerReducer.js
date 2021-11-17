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

export default (state, action) => {
	switch(action.type){
		case GET_REGISTERS_INIT:
		case GET_REGISTER_INIT:
		case CREATE_REGISTER_INIT:
		case EDIT_REGISTER_INIT:
		case DELETE_REGISTER_INIT:
			return{
				...state,
				isLoading: true,
				error: false,
			}
        case GET_REGISTERS_FAIL:
        case GET_REGISTER_FAIL:
        case CREATE_REGISTER_FAIL:
        case EDIT_REGISTER_FAIL:
        case DELETE_REGISTER_FAIL:
			return{
				...state,
				isLoading: false,
				error: action.payload
			}
		case GET_REGISTERS_SUCCESS:
			return{
				...state,
				registers: action.payload,
				isLoading: false,
				error: false
			}
		case CREATE_REGISTER_SUCCESS:
			return{
				...state,
				registers: state.registers.concat(action.payload),
				isLoading: false,
				error: false
			}
		
		case DELETE_REGISTER_SUCCESS:
			return{
				...state,
				registers: state.registers.filter( register => register.id != action.payload),
				isLoading: false,
				error: false
			}
		case EDIT_REGISTER_SUCCESS:
			return{
				...state,
				registers: state.registers.map( register => register.id == action.payload.id ? action.payload : register),
				isLoading: false,
				error: false
			}
		default:
			return state;
	}
}