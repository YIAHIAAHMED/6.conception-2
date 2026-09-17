import React from 'react';

const Cart = ({ carts }) => {
    return (
        <div>
            <h1 className='text-2xl font-bold'>Yours Carts</h1>
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
            <div className="flex justify-between bg-amber-600 mt-4 ">
                <div className="">Total</div>
                <div className="">0</div>
            </div>
        </div>
        
    );
};

export default Cart;