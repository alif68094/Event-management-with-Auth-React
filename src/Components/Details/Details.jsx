import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ServiceDetails from "../serviceDetails/ServiceDetails";

const Details = () => {
    const [detail, setDetail] = useState({})

    const { id } = useParams();
    const services = useLoaderData()


    useEffect(() => {
        const findServiceDetails = services.find(service => service.id == id);
        setDetail(findServiceDetails);
    },[id, services])
    console.log(detail);


   
   

    return (
        <div>
                <ServiceDetails detail={detail}></ServiceDetails>
            
        </div>
    );
};

export default Details;