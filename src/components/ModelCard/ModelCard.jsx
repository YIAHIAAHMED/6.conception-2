import React, { useState } from 'react';

const ModelCard = ({model}) => {
    const [isSubscribed, SetIsSubscribed] = useState(false)
    return (
        <div key={model.id} className="shadow-lg rounded-lg p-5 border overflow-hidden border-zinc-300">
                    <div className="flex justify-center items-center h-56 bg-zinc-200">
                        <img className="h-40 w-40 object-contain" src={model.image} alt={model.title} />
                    </div>
                    <div className="p-4 space-y-3">
                       <h2 className="text-2xl font-bold">{model.title}</h2> 
                       <p>{model.description} </p>
                       <div className="">
                        <p className="text-2xl font-bold"> ${model.price}/month </p>
                        <button onClick={() => SetIsSubscribed(true)} className="btn w-full bg-red-500 text-white rounded-lg mt-10" >{isSubscribed? 'Subscribed': 'Subscribe Now'} </button>
                       </div>
                       
                    </div>
                    

                </div> 
    );
};

export default ModelCard;