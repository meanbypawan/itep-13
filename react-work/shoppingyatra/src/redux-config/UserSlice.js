import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name:"User-Slice",
    initialState:{
        user: {},
        isLoggedIn: false
    },
    reducers:{
        setUser: (state,action)=>{
          let {contact,name,email,profile} = action.payload
          state.user = {contact,name,email,profile};
          state.isLoggedIn = true;
        },
        signOut: (state,action)=>{
            state.user = {};
            state.isLoggedIn = false;
        }
    }
});
export const {setUser, signOut} = slice.actions;
export default slice.reducer;