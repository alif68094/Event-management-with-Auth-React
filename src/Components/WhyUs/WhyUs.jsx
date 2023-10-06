import { Link } from "react-router-dom";


const WhyUs = () => {
    return (
        <div className="flex gap-5 items-center w-3/4 mx-auto mb-16 ">
            <div className="h-[400px] w-1/3">
                <img className="h-full w-full" src="https://i.ibb.co/rwztz24/Home-01-port-08.jpg" alt="" />
            </div>
            <div className="w-3/5  p-6 space-y-5">
                <p>WHY CHOOSE US?</p>
                <h1 className="text-4xl font-semibold">We Bring Ideas To Life
                </h1>
                <p className="text-gray-500">Are you ready to plunge into the mystery of the birth of a creative idea? Our team perceives each new project as a part of itself. We generate the best ideas to achieve your goals.</p>
                <button className="text-red-600"><Link>Learn More</Link></button>
            </div>
          
        </div>
    );
};

export default WhyUs;