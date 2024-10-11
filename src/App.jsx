import { useState } from 'react';
import Password from './password';
import Effect from './Effect';


function App() {
  const[length,setLength]=useState(8);
  const[charac,setCharac] = useState(false);
  const[num,setNum] = useState(false);

    return (
    <>
      <div className='h-screen flex justify-center items-center'>
        <div className='flex flex-col justify-center items-center bg-black p-6 rounded-lg border border-solid border-white'>
          <h1 className="text-white mb-4 font-bold text-5xl">Password Generator</h1>
          <Password length={length} charac={charac} num ={num} ></Password>
          <Effect setLength={setLength} length={length} num={num} charac={charac} setCharac={setCharac} setNum={setNum}></Effect>
        </div>
      </div>
    </>
  );  
}

export default App;
