import React from 'react';

const Cart = ({ carts, setCarts }) => {
    const totalPrice = carts.reduce((sum, item) => sum + item.price, 0)
    // console.log(totalPrice);
    const handlePayment = () => {
        setCarts([])
    }
    return (
        <div>
            <h1 className='text-2xl font-bold'>Yours Carts</h1>
            {
                carts.length === 0 ? <p>Your Cart is empty</p> :
                    <>
                        {
                            carts.map(item =>
                                <div className="space-y-3 mt-4">
                                    <div key={item.id} className='flex justify-between items-center border'>
                                        <div>
                                            <img className='h-20 w-20 object-contain' src={item.image} />
                                        </div>
                                        <div className="text-2xl font-bold">
                                            <h2>{item.title} </h2>
                                        </div>
                                        <div className="text-3xl font-bold">
                                            <p>${item.price}/month</p>
                                        </div>

                                    </div>
                                </div>
                            )
                        }
                        <div className="flex justify-between bg-amber-600 mt-4 p-5 text-3xl font-bold ">
                            <div className="">Total</div>
                            <div className="">${totalPrice}/month </div>
                        </div>
                        <button onClick={handlePayment} className='btn w-full mt-5 bg-amber-500 text-white text-2xl rounded-lg'>Proceed to Checkout</button>
                    </>
            }

        </div>

    );
};

export default Cart;