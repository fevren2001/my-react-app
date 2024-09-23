import React, {useState} from 'react';

function ArrayComponent() {

    const [foods, setFoods] = useState(["Pizza", "Hamburger", "Coke"]);

    const handleAddFood = () =>{
        const foodInput = document.getElementById('foodInput').value;
        setFoods(f => [...f, foodInput]);
        document.getElementById('foodInput').value = '';
    }

    const handleRemoveFood = (index) => {
        setFoods(foods.filter((_, i) => i !== index));
    }
    
    return(
        <div>
            <ul >
                {foods.map((food, index) => {
                    return <li onClick={() => handleRemoveFood(index)} key={index}>{food}</li>
                })}
            </ul>
            <input type="text" id='foodInput' placeholder='Enter your food here'/>
            <button onClick={handleAddFood}>Add Food</button>
        </div>
    );
}

export default ArrayComponent;