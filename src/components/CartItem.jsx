import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";


const CartItem = ({item, itemIndex, cartLength}) => {
  console.log("index",itemIndex)
  console.log("length",cartLength)

const {cart} = useSelector((state) => state);
const dispatch = useDispatch();

function removerHandler() {
  dispatch(remove(item.id));
}

  return (
  <div className="flex flex-col mt-5">
    <div className="w-full p-2 md:p-5  mb-2 md:mx-5  ml-6     ">
    <div className="flex flex-col md:flex-row items-center gap-5 mr-7 ">
    <div className=" w-[30%]  ">
    <img src={item.image} className="object-cover" />
  </div>
  <div className="ml-10 self-start w-[100%] space-y-5 md:w-[70%]">
    <div>
      <p className="text-xl font-semibold text-slate-700">{item.title}</p>
    </div>
    <div>
      <p className=" text-base font-medium text-slate-700">{item.description.split(" ").slice(0,15).join(" ") + "..."}</p>
    </div>
    <div className="flex justify-between">
      <p className="text-xl text-green-600 font-bold ">${item.price}</p>
      <button className="bg-red-300 p-3 rounded-full"
      onClick={removerHandler}><MdDelete className="text-red-800"/></button>
    </div>
  </div>
    </div>
  </div>
  {
    itemIndex !== cartLength - 1 && (
      <hr className="h-[0.08rem] bg-slate-50 border-0 dark:bg-slate-800"></hr>
    )
  }
  </div>
    );
};

export default CartItem;
