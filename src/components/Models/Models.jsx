import { use } from "react";


const Models = ({ modelPromise }) => {
    const models = use(modelPromise);
    console.log(models);


    return (
        <div className="py-20">
            <div className="text-center">
                <h2 className="text-5xl font-bold">Choose Your AI Model</h2>
                <p>One subscription gives you access to all frontier AI models</p>
            </div>
            <div className="">
                {models.map(model => <div className="">
                    <div className="">
                        <img src={model.image} />
                    </div>
                </div> )}
            </div>
        </div>
    );
};

export default Models;