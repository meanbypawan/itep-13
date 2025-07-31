import { configureStore } from "@reduxjs/toolkit";
import RecipeSlice from "./RecipeSlice";
const store = configureStore({
    reducer:{
        RecipeData: RecipeSlice
    }
});

export default store;