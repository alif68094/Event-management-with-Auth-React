import { Link } from "react-router-dom";


const Service = ({service}) => {
    const {id, event_name, price, img, short_description, full_description, button_name} = service;
    return (
        <div className="card bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{event_name}</h2>
          <p>{short_description}</p>
          <p>{price}</p>
          <div className="card-actions">
           <Link to={`/services/${id}`}> <button className="border border-black px-3 py-1 hover:bg-black hover:text-white"> {button_name}</button></Link>
          </div>
        </div>
      </div>
    );
};

export default Service;