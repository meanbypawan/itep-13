import React from "react";
function Fourth({incrementCounter}){
    console.log("Fourth Render");
    return <>
      <h1>Fourth Component..</h1>
      <button>Increment Counter</button>
    </>
}

export default React.memo(Fourth);