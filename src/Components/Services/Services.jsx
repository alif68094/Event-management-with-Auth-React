import Service from "../Service/Service";
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";



const Services = ({services}) => {
    useEffect(() => {
        Aos.init({duration: 1000})
    },[])
    console.log(services);
    
    return (
        <div className="mt-14 mb-14" data-aos="fade-up">
            <h1 className="text-3xl text-center font-semibold mb-10">Our Services</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
            
        </div>
    );
};

export default Services;