import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "Counter-Slice",
    initialState:{
        counter: 100,
        evenCounter: 0,
        oddCounter: 1
    },
    reducers:{
        incrementConter: (state,action)=>{
           state.counter = state.counter + 1;   
        },
        incrementEvenCounter:(state,action)=>{
            state.evenCounter = state.evenCounter + 2;
        },
        incrementOddCounter: (state,action)=>{
            state.oddCounter = state.oddCounter + 2;
        }

    }
})
export const {incrementConter, incrementEvenCounter, incrementOddCounter} = slice.actions;
export default slice.reducer;