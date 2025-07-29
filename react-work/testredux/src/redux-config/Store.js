import { configureStore } from "@reduxjs/toolkit";
import MessageSlice from "./MessageSlice";
import CounterSlice from "./CounterSlice";
const store = configureStore({
    reducer:{
        DataMessage: MessageSlice,
        DataCounter: CounterSlice
    }
});
// DataMessage = {m1:"GM..",m2:"GN..."}
// DataCounter : {counter:100, evenCounter: 0, oddCounter:1}
export default store;