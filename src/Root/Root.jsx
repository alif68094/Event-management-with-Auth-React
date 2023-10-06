import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";


const Root = () => {
    return (
        <div className="">
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;