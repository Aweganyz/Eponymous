import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
    name: 'auth',
    initialState: {
        loading: true,
        isAuthenticated: false
    },
    reducers: {
   
        enqueryRequest(state, action){
            return {
                ...state,
                loading: true,
            }
        },
        enquerySuccess(state, action){
            return {
                // console.log("succes")
                loading: false,
                isAuthenticated: true,
                user: action.payload.user
            }
        },
        enqueryFail(state, action){
            return {
                ...state,
                loading: false,
                error:  action.payload
            }
        },
    }
});

const { actions, reducer } = authSlice;

export const { 
    enqueryRequest,
    enquerySuccess,
    enqueryFail,
    
 } = actions;

export default reducer;

