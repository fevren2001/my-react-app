import React, {useState} from "react";

function Cars(){

    const [carYear, setYear] = useState(new Date().getFullYear())
    const [carModel, setModel] = useState("")
    const [carMake, setMake] = useState("")

    const [cars, setCars] = useState(
        []
    )

    function yearHandle(){
        const year = document.getElementById("year_input").value
        setYear(year)
    }
    function modelHandle(){
        const model = document.getElementById("model_input").value
        setModel(model)
    }
    function makeHandle(){
        const make = document.getElementById("make_input").value
        setMake(make)
    }
    function carHandle(){
        const car = {
            year:document.getElementById("year_input").value,
            model:document.getElementById("model_input").value,
            make:document.getElementById("make_input").value
        }
        setCars(c => [...c, car])

        document.getElementById("year_input").value = new Date().getFullYear()
        document.getElementById("model_input").value = ""
        document.getElementById("make_input").value = ""
    }

    function handleRemoveCar(index){
        setCars(cars.filter((_, i) => i!==index))
    }

    return(
        <div>
            <ul>
                {cars.map((car, index) =>{
                    return <li onClick={() => handleRemoveCar(index)} key={index}>{car.year + " " +   car.model + " " + car.make}</li>
                }

                ) }

            </ul>

            <input placeholder= "year" onChange = {yearHandle} type="number" id="year_input"></input>
            <br></br>            
            <input placeholder= "model" onChange = {modelHandle} id="model_input"></input>
            <br></br>
            <input placeholder= "make" onChange = {makeHandle} id="make_input"></input>
            <br></br>

            <button onClick={carHandle}>
                Add Car
            </button>
        </div>
    );
}


export default Cars;
