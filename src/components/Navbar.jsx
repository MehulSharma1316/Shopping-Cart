import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import ThemeSwitcherBtn from "./ThemeSwitcherBtn";

const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <div>
      <div className="flex justify-between items-center h-[10.95vh] max-w-6xl mx-auto">
        <NavLink to="/">
          <div className="ml-5">
            <img src="../logo.png" className="h-14" />
          </div>
        </NavLink>
        <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
          <NavLink to="/">
            <p>Home</p>
          </NavLink>
          <NavLink to="/cart">
            <div className="relative">
              <FaShoppingCart className="text-2xl" />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full">
                  {cart.length}
                </span>
              )}
            </div>
          </NavLink>
          <div>
            <ThemeSwitcherBtn/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
