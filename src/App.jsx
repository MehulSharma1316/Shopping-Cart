import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart"
import Navbar from "./components/Navbar"
import { useEffect } from "react";
import { useSelector } from "react-redux";

const App = () => {

  const {theme} = useSelector((state) => state)

console.log("theme",theme)
 useEffect(() => {
    
  document.querySelector('html').classList.remove("light", "dark")
  document.querySelector('html').classList.add(theme)
}, [theme])


  return <>
  <div className="bg-gray-50 dark:bg-gray-800">
  <div className="bg-slate-900 ">
    <Navbar/>
  </div>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/cart" element={<Cart/>} />
    </Routes>
  </div>
  
  </>;
};

export default App;
