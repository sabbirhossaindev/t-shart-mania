import React from 'react';

const Cart = ({ cart, handleRemoveItem }) => {
    let message;
    if (cart.length === 0) {
        message = <p>Please buy at least one Item ...😬</p>
    }
    else {
        message = <p>Thanks for buying...😮</p>
    }
    return (
        <div>
            {/* <h3 className={cart.length ===2 ? `orange` : 'purple'}>Order Summary</h3>
            <h5 className={`bold ${cart.length ===2 ? 'blue':'yellow' }`}>Order quantity: {cart.length}</h5> */}
            <h3>Order summary</h3>
            <hr />
            <h5>Order Quantity: {cart.length}</h5>
            {
                cart.map(tshirt => <p
                    key={tshirt._id}
                >
                    {tshirt.name}
                    <button onClick={() => handleRemoveItem(tshirt)}> X</button>
                    
                </p>)
            }
            {
                message
            }
            {/* */}
        </div>
    );
};

export default Cart;

/* 
Conditional Rendering
1. use element in a variable and then use if-else to set value
2. ternary operation condition ? true : false 
3. && operator (if condition is true, i want to display something)
4. || operator (if condition is false, i want to display something)
*/