import React from "react";
function Third({data}){
    console.log("Third render");
    return <>
      <h1>Third Component...{data.m1} : {data.m2}</h1>
    </>
}

export default React.memo(Third);