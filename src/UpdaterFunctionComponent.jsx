import React, {useState} from "react";

function UpdaterFunctionComponent() {

    const [count, setCount] = useState(0)

    const incCount = () => {
        setCount(c => c+1) // Without the updater functions, it wouldnt' work
        setCount(c => c+1) // because, for efficiency, it doesn't update the state immediately
        setCount(c => c+1)
    }
    
    const decCount = () => {
        setCount(countPrev => countPrev-1); // good practice to use countPrev or c instead of count
        setCount(countPrev => countPrev-1);
    }
    const resetCount = () => {setCount(0)}

    return(
        <div>
            <h1>Count: {count}</h1>
            <button onClick={incCount}>Increment 3</button>
            <button onClick={decCount}>Decrement 2</button>
            <button onClick={resetCount}>Reset</button>
        </div>
    );
}

export default UpdaterFunctionComponent
