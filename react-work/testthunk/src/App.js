import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipe } from "./redux-config/RecipeSlice";

function App(){
  const dispatch = useDispatch();
  let {recipeList,isLoading,error} =  useSelector((store)=>store.RecipeData);
  useEffect(()=>{
    dispatch(fetchRecipe());
  },[]);
  return <>
    {isLoading? <h1>Please wait data is loading</h1>:<p>"Data is loaded.."</p>}
  </>
}

export default App;