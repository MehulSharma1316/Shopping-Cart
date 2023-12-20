import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/CartSlice";

const Product = ({item}) => {
  const {cart} = useSelector((state) => state)
  const dispatch = useDispatch()
  function addHandler() {
    dispatch(add(item));
  }

  function removeHandler() {
    dispatch(remove(item.id));
  }

  return (
  <div  className="flex flex-col items-center justify-between 
    hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl border-2 
    shadow-xl hover:shadow-[0px_25px_50px_40px_rgba(0,0,0,0.15)]
    group ">
 
    <div>
    <p  className="text-gray-700 font-semibold text-lg  truncate text-left w-40 mt-1">{item.title }</p>
    </div>
    <div className="text-[10px] text-gray-400 w-40 mt-1 text-left  ">
    <p>{item.description.split(" ").slice(0,10).join(" ") + "..."} </p>
    </div>
   <div className="h-[180px]">
   <img src={item.image} className="h-full w-full" />
   </div>
   <div className="flex mt-5 items-center justify-between w-full">
   <div>
   <p className="text-green-600 font-semibold">${item.price}</p>
   </div>
    <div className=" border-2 border-black p-1 px-3 rounded-full font-medium text-[12px]
     group-hover:bg-gray-700 transition duration-300 ease-in group-hover:text-white">
      {
        cart.some((c) => c.id === item.id) ?
        (
          <button onClick={removeHandler}>
            REMOVE ITEM
          </button>
        ) :
        (
          <button onClick={addHandler}>
            ADD TO CART
          </button>
        )
      }
    </div>
   </div>
  </div>
  );
};

export default Product;
