import { createSlice } from "@reduxjs/toolkit";



const initialState ={
    data:[],
    payment:null,

}




export const OrderSlice = createSlice({
    name:'order',
    initialState,
    reducers:{
        reset:(state)=>{
            state.data=[];
            state.payment = null;
        },
        update:(state,action)=>{
            state.data.push(action.payload);
        },
        pay:(state,action)=>{
            state.payment=action.payload;

        }
    }
})

export const {reset,update,pay} = OrderSlice.actions;
export default OrderSlice.reducer;