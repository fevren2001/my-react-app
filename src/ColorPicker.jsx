import React, { useState } from 'react';

const ColorPicker = () => {
    const [color, setColor] = useState('#ffffff');

    const handleChange = (event) => {
        setColor(event.target.value);
    };

    return (
        <div>
            <input className = "color-picker"
                type="color" 
                value={color} 
                onChange={handleChange} 
            />
            <p className='colored-text' style={{backgroundColor:color}}>Selected Color: {color}</p>
        </div>
    );
};

export default ColorPicker;