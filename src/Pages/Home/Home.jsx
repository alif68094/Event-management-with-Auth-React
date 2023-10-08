import { useLoaderData } from "react-router-dom";
import AboutUs from "../../Components/AboutUs/AboutUs";
import Banner from "../../Components/Banner/Banner";
import Services from "../../Components/Services/Services";
import WhyUs from "../../Components/WhyUs/WhyUs";



const Home = () => {
    const services = useLoaderData();
    
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Services services={services}></Services>
            <WhyUs></WhyUs>
            
        </div>
    );
};

export default Home;