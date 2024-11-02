import { useRef } from "react";

function Add() {
    const num1Ref = useRef(null);
    const num2Ref = useRef(null);
    const resRef = useRef(null);

    // Perform addition
    const handleAddition = () => {
        const num1 = parseFloat(num1Ref.current.value);
        const num2 = parseFloat(num2Ref.current.value);
        const sum = num1 + num2;
        resRef.current.value = sum;
    };

    return (
        <>
            <h2>Addition of 2 Numbers</h2>
            <input ref={num1Ref} type="number" placeholder="Enter the first number" />
            <input ref={num2Ref} type="number" placeholder="Enter the second number" />
            <button onClick={handleAddition}>ADD</button>
            <input ref={resRef} type="text" placeholder="Result" readOnly />
        </>
    );
}

export default Add;
