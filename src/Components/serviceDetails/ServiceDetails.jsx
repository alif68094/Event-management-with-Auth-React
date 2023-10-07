
const ServiceDetails = ({detail}) => {
  const {id, event_name, price, img, short_description, full_description, button_name} = detail;
    return (
        <div className="w-3/4 mx-auto mb-10">
            <img className=" w-full h-[200px] md:h-[500px]" src={img} alt="" />
            <h1 className="text-3xl font-semibold mt-7 mb-4">{event_name}</h1>
            <p>{full_description}</p>
            <p className="text-xl font-semibold mt-4">Price: {price}</p>
            <button className="px-3 py-2 border border-black mt-4 hover:bg-black hover:text-white">Book Us Now</button>
        </div>
    );
};

export default ServiceDetails;