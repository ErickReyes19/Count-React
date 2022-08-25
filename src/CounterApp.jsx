import { useState } from "react";
import PropTypes from "prop-types";


export const CounterApp = ({ value }) => {
    const [counter, setCounter] = useState(value);

    function sumar() {
        setCounter(counter + 1)
        // setCounter((c) => c + 1)
    }

    function restar() {
        setCounter(counter - 1)
        // setCounter((c) => c + 1)
    }
    function reset() {
        setCounter(value)
        // setCounter((c) => c + 1)
    }

    return (<>
        <h1>CounterApp</h1>
        <h2> {counter} </h2>
        <button onClick={sumar}>  + 1</button>
        <button onClick={restar}>  - 1</button>
        <button onClick={reset}>  reset 0 </button>
    </>)
}

CounterApp.prototype = {
    value: PropTypes.number
}




