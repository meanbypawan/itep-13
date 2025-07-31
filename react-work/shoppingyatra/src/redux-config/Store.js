import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";
const store = configureStore({
    reducer:{
        User: UserSlice
    }
});
// User :{user:{},isLoggedIn: false}
export default store;