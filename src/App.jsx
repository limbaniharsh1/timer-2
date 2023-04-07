import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [check, setCheck] = useState(false);
  let id;

  useEffect(() => {
    if(check){
      id = setInterval(() => {
        setCount(count+1)
      }, 1000);
    }
    else{
      setCount(count)
    }
    
    return () => {
      clearInterval(id)
    };
  }, [count,check]);
  
      let clear=()=>{
        console.log('hello world')
        setCount(0)
        setCheck(false)
      }

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => setCheck(true)}>start</button>
      <button onClick={() => setCheck(false)}>stop</button>
      <button onClick={() => clear()}>clear</button>
    </div>
  );
}

export default App;
