import { Link } from "react-router-dom";
import { AiOutlineFacebook, AiOutlineInstagram, AiFillTwitterSquare } from "react-icons/ai";



const Footer = () => {
    return (
        <div className="bg-[#1e1d26]">
           <div className="flex flex-col lg:w-4/5 mx-auto text-white gap-5 py-5 items-center space-y-5">
           
            <div className="text-center space-y-3">
                <p>
                We are a team of professionals and our passion is the creation and implementation of creative and grand events.
                </p>
                <button className="text-red-600"><Link>Learn More</Link></button>
                <h1 className="text-lg">Follow Us On</h1>
                <div className="flex justify-center text-3xl gap-3">
                    <AiOutlineFacebook></AiOutlineFacebook>
                    <AiOutlineInstagram></AiOutlineInstagram>
                    <AiFillTwitterSquare></AiFillTwitterSquare>
                </div>
            </div>
            <div className="flex gap-3 lg:gap-10 p-1">
                <div>
                    <h1>OUR ADDRESS</h1>
                    <p className="text-xs">198 West 21th Street, <br /> Suite 721 New York, NY 10010</p>

                </div>
                <div>
                    <h1>FOR INQUIRIES</h1>
                    <p className="text-xs">youremail@yourdomain.com</p>
                </div>
                <div>
                    <h1> Contact Us</h1>
                    <p className="text-xs">+88 101 0000 000</p>
                </div>
            </div>
          
           </div>
        </div>
    );
};

export default Footer;