import React, { useState } from 'react';

function Calculator() {
    const [count, setCount] = useState();
    const [inputt, setInputt] = useState();
    const [inputtt, setInputtt] = useState();

    const handleInputChange1 = (event) => {
        setInputt(Number(event.target.value));
    };

    const handleInputChange2 = (event) => {
        setInputtt(Number(event.target.value));
    };

    const handleAdd = () => {
        setCount(inputt + inputtt);
    };

    const handleSub = () => {
        setCount(inputt - inputtt);
    };

    const handleMult = () => {
        setCount(inputt * inputtt);
    };

    const handleDiv = () => {
        if (inputtt !== 0) {
            setCount(inputt / inputtt);
        } else {
            alert("Cannot divide by zero");
        }
    };

    return (
        <>
            <h1>Calculator</h1>
            <input type="number" onChange={handleInputChange1} value={inputt} placeholder="Enter first number" /><br />
            <input type="number" onChange={handleInputChange2} value={inputtt} placeholder="Enter second number" /><br />
            <input type="text" value={count} readOnly /><br />
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleSub}>Subtract</button>
            <button onClick={handleMult}>Multiply</button>
            <button onClick={handleDiv}>Divide</button>
        </>
    );
}

export default Calculator;
