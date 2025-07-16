import { createContext, useState } from "react";
import First from "./components/First";

export const MessageContext = createContext();
export const DataContext = createContext();
export const CounterContext = createContext();
function App(){
  let dataMessage = "Hello";
  const [counter,setCounter] = useState(100);
  return <>
    <h1>App Component...{counter}</h1>
    <MessageContext value={dataMessage}>
      <DataContext value={{m1:"GM",m2:"GN",m3:"GE"}}>
        <CounterContext value={{counter,setCounter}}>
          <First/>
        </CounterContext>
      </DataContext>
    </MessageContext>
    
  </>
}

export default App;