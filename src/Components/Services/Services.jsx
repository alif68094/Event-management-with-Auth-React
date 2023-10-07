import Service from "../Service/Service";




const Services = ({services}) => {
    console.log(services);
    
    return (
        <div className="mt-14 mb-14">
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