import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import React, { Suspense } from "react";
//import TermAndCondition from "./TermAndCondition";
const TAC = React.lazy(()=>import("./TermAndCondition"));
function RouteConfig() {
    return <>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='about' element={<About/>} />
            <Route path='contact' element={<Contact/>} />
            <Route path="term-and-condition" element={<Suspense fallback={<h1>Loading...</h1>}><TAC/></Suspense>}/>
        </Routes>
    </>
}

export default RouteConfig;