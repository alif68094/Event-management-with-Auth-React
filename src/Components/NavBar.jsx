import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <div className=" flex justify-center">
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
    </div>
  );
};

export default Navbar;