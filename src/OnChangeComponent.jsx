import React, { useState } from 'react';

const OnChangeComponent = () => {
    
    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState(0);
    const [comment, setComment] = useState();
    const [payment, setPayment] = useState();
    const [shipping, setShipping] = useState("Pick Up");

    function updateName(e){
        setName(e.target.value);
    }
    
    function updateQuantity(e){
        setQuantity(e.target.value);
    }
    
    function updateComment(e){
        setComment(e.target.value);
    }
    function handlePayment(e){
        setPayment(e.target.value);
    }
    function handleShipping(e){
        setShipping(e.target.value);

    }
    return (
        


        <div>
            <input onChange={(e) => {updateName(e)}}/>
            <p>Name: {name}</p>

            <input onChange={(e) => {updateQuantity(e)}} type='number'/>
            <p>Quantity: {quantity}</p>

            <input onChange={(e) => {updateComment(e)}} placeholder='Tell delivery instructions'/>
            <p>Comment: {comment}</p>

            <select onChange={(e) => {handlePayment(e)}}> 
                <option value=''>Select Payment Method</option>
                <option value='Credit Card'>Credit Card</option>
                <option value='Google Pay'>Google Pay</option>
                <option value='Apple Pay'>Apple Pay</option>
                <option value='Paypal'>Paypal</option>
            </select>
            <p>Payment: {payment}</p>

            <label>
                <input type='radio' checked={shipping=='Pick Up'} value='Pick Up' onChange={(e) => {handleShipping(e)}}/>
                Pick Up
            </label>
            <label>
                <input type='radio' checked={shipping=='Delivery'} value='Delivery' onChange={(e) => {handleShipping(e)}}/>
                Delivery
            </label>
            <p>Shipping: {shipping}</p>
        </div>
    );
};



export default OnChangeComponent;