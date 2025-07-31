import React from "react";
function Second({dataMessage}){
    console.log("Second Render...");
    return <>
      <h1>Second Component...{dataMessage}</h1>
    </>
}

export default React.memo(Second);