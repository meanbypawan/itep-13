import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import { act, createContext, useContext, useEffect, useReducer, useState } from 'react';
import axios from 'axios';
import EndPoint from './apis/EndPoint';
import ViewMore from './components/view-more/ViewMore';
import SignIn from './components/sign-in/SignIn';
import SignUp from './components/sign-up/SignUp';
import BuyNow from './components/buy-now/BuyNow';
import Auth from './components/auth/Auth';
import Profile from './components/profile/Profile';

export const CategoryContext = createContext();
function App() {
  const [state,dispatch] = useReducer((state,action)=>{
    if(action.type === "set-categories"){
      state.categoryList = action.payload;
    }
    return {...state};
  },{
    categoryList: []
  });
  //const [categoryList,setCategoryList] = useState([]);
  useEffect(()=>{
    loadCategories();
  },[]);
  const loadCategories = async()=>{
    try{
       const response =await axios.get(EndPoint.CATEGORY_LIST);
       dispatch({type:"set-categories",payload: response.data.categories});
       //setCategoryList(response.data.categories);
    }
    catch(err){
      console.log(err);
    }
  }
  return <>
   <CategoryContext value={{categoryList: state.categoryList}}>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='view-more/:id' element={<ViewMore/>}/>
      <Route path='sign-in' element={<SignIn/>}/>
      <Route path='sign-up' element={<SignUp/>}/>
      <Route path='buy-now' element={<Auth><BuyNow/></Auth>}/> 
      <Route path='profile' element={<Auth><Profile/></Auth>}/>
    </Routes>    
   </CategoryContext> 
  </>
}

export default App;
