import {createSlice} from "@reduxjs/toolkit";

const userData =[];

const addUserSlice = createSlice ({
    name:"users",
    initialState:{
        value:userData
    },
    reducers:{
        userAdd:(state,{payload}) => {
            state.value.push(payload)
        },
        userRemove:(state,{payload}) =>{
            state.value= state.value.filter((user)=>user.id !== payload.id)
        }
    }

})
export const {userAdd, userRemove} = addUserSlice.actions;
export default addUserSlice.reducer;