import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart"
import Navbar from "./components/Navbar"

const App = () => {
  return <>
  <div className="bg-slate-900 ">
    <Navbar/>
  </div>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/cart" element={<Cart/>} />
    </Routes>
  </>;
};

export default App;
