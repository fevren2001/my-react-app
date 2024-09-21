import React, {useState} from 'react';


const Car = () => {

    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: 1964
    });

    const handleBrandChange = (e) => {e.target.value = setCar({...car, brand: e.target.value})}
    const handleModelChange = (e) => {e.target.value = setCar({...car, model: e.target.value})}
    const handleYearChange = (e) => {e.target.value = setCar({...car, year: e.target.value})}

    return (
        <div>
            <input type="text" value={car.brand} onChange={handleBrandChange} />
            <input type="text" value={car.model} onChange={handleModelChange} />
            <input type="number" value={car.year} onChange={handleYearChange} />

            <h2>Car: {car.brand} {car.model} {car.year}</h2>
        </div>
    );
};

export default Car;