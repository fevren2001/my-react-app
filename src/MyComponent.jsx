import React, {useState } from "react"

function MyComponent() {

    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isStudent, setIsStudent] = useState(false);

    const updateName = () => {
        setName("Fatih");
    }
    const updateAge = () => { 
        setAge(age + 1);
    }
    const updateIsStudent = () => {
        setIsStudent(!isStudent);
    }


    return(
        <div>
            <p>Name:{name}</p>
            <button onClick={updateName}>Set Name</button>
        
            <p>Age:{age}</p>
            <button onClick={updateAge}>Increment Age</button>

            <p>Is Student:{isStudent ? "Yes" : "No"}</p>
            <button onClick={updateIsStudent}>Toggle Student</button>
        </div>
    )
}

export default MyComponent;