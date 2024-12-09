import React from 'react';
import { useState } from 'react';

function Counter() {

    const [count,setCount] = useState(0)

    const handleAddition = ()=>{
        setCount(count + 1)
    };
    const handleReset = ()=>{
        setCount(count * 0)
    };
    const handleSubtraction = ()=>{
        setCount(count - 1)
    }

  return (
    <>
    <input value={count} type="text" />
    <button onClick={handleAddition}>Add</button>
    <button onClick={handleReset}>Reset</button>
    <button onClick={handleSubtraction}>Subtract</button>
    </>
  )
}

export default Counter