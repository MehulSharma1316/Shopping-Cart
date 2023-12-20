import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product"

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)

  async function fetchProductData() {
    try {
      setLoading(true);
      const res = await fetch(API_URL);
      const data = await res.json();
      console.log(data)
      setItems(data);
    } catch (error) {
      console.log(error)
      setItems([]);
      
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchProductData()
  },[])

  return <div>
     <div >
      {
        loading ? <Spinner/> :
        items.length > 0 ? 
        (
          <div className="grid  xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
           {
             items.map((item) => (
              <Product key = {item.id} item={item} />
              ))
           }
          </div>
        ) : 
        (
          <div className="flex justify-center items-center">
            No Data Found
          </div>
        )
      }
     </div>
  </div>;
};

export default Home;
