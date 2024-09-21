import React, {useState} from "react";

function Counter() {

    const [count, setCount] = useState(0)

    const incCount = () => {setCount(count+1)}
    const decCount = () => {setCount(count-1)}
    const resetCount = () => {setCount(0)}

    return(
        <div className="counter-container">
            <h3 className="counter-title">Counter</h3>
            <p className="counter">{count}</p>
            <button onClick={incCount}  className="increment-button">Increment</button>
            <button onClick={decCount} className="decrement-button">Decrement</button>
            <button onClick={resetCount} className="reset-button">Reset</button>
        </div>
    );
}

export default Counter
