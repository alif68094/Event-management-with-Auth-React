import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Hooks/AuthProvider";


const Navbar = () => {
  const {user, logOut} = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
    .then(() => console.log("ABC"))
    .catch(error => console.log(error))
  }
  return (
    <div className=" flex justify-between items-center">
      <nav className="flex justify-between items-center py-6  px-5">


        <ul className="flex gap-5">
          <li className="text-xl">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-600 font-bold" : ""
              }
            >
              Home
            </NavLink>

          </li>

          <li className="text-xl">
            <NavLink
              to="/register"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-600 font-bold" : ""
              }
            >
              Register
            </NavLink>


          </li>
          <li className="text-xl">
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-600 font-bold" : ""
              }
            >
              Login
            </NavLink>


          </li>
        </ul>

      </nav>
      <div className="">
        {
          user && <span>{user.email}</span>
        }
        <button onClick={handleLogOut} className="px-3 py-2 bg-black rounded text-white">Log Out</button>
       
      </div>
    </div>
  );
};

export default Navbar;