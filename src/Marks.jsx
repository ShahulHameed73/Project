import { useRef } from "react";

function Marks(){
    const mathsRef = useRef(null);
    const physicsRef = useRef(null);
    const chemistryRef = useRef(null);
    const englishRef = useRef(null);
    const totalref = useRef(null);
    const AverageRef = useRef(null);
    //
    const handleTotal =()=>{
        const maths = parseFloat(mathsRef.current.value);
        const physics = parseFloat(physicsRef.current.value);
        const chemistry = parseFloat(chemistryRef.current.value);
        const english = parseFloat(englishRef.current.value);
        //
        const total = maths+physics+chemistry+english;
        totalref.current.value = total;

    } 
    const handleAverage=()=>{
        const maths = parseFloat(mathsRef.current.value);
        const physics = parseFloat(physicsRef.current.value);
        const chemistry = parseFloat(chemistryRef.current.value);
        const english = parseFloat(englishRef.current.value);
        //
        const average = (maths+physics+chemistry+english)/4
        AverageRef.current.value = average;
    }
    return(
        <>
        <h1>marks of the students</h1>
        <label>maths marks:</label>
        <input type="number" ref={mathsRef} placeholder="enter the maths marks"/>
        <label>physics marks:</label>
        <input type="number" ref={physicsRef} placeholder="enter the physics marks"/>
        <label>chemistry marks:</label>
        <input type="number" ref={chemistryRef} placeholder="enter the chemistry marks"/>
        <label>english marks:</label>
        <input type="number" ref={englishRef} placeholder="enter the english marks"/>
        <label>total marks:</label>
        <input type="number" ref={totalref} placeholder="enter the maths marks"/>
        
        </>
    )
}