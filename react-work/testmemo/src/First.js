import React from "react";

function First(){
    console.log("First render");
    return <>
      <h1>First Component...</h1>
    </>
}
const MemoizedFirst = React.memo(First);
export default MemoizedFirst;