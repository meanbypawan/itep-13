import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchRecipe = createAsyncThunk("Recipe-Slice/fetchRecipe",async()=>{
   try{
     let response = await axios.get("https://dummyjson.com/recipes");
     //console.log(response.data.recipes);
     return response.data.recipes;
   }
   catch(err){
    console.log(err);
   } 
});
const slice = createSlice({
    name:"Recipe-Slice",
    initialState:{
        recipeList: [],
        isLoading: false,
        error: null
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchRecipe.pending,(state,action)=>{
            state.isLoading = true;
        })
        .addCase(fetchRecipe.fulfilled,(state,action)=>{
            console.log(action.payload);
            state.recipeList = action.payload;
            state.isLoading = false;
        })
        .addCase(fetchRecipe.rejected,(state,action)=>{
            state.isLoading = false;
            state.error = "Oops! something went wrong...";
        })
    }
});

export default slice.reducer;