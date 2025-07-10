function First({data,setCounter,counter}){
    let {message,m1} = data;
    return <>
      <h2>First Component..</h2>
      {message} : {m1}
      <hr/>
      <button onClick={()=>setCounter(counter+1)}>Increment Counter</button>
    </>
}

export default First;