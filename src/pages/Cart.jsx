
import Header from "../components/Header";
import CartItem from "../components/CartItem";

import { useNavigate } from "react-router-dom";



const Cart = () => {
   

    const navigate = useNavigate();

    const HandleOrder = () => {
      navigate('/order-placing-form')
    }

    



    

    
    return (
      <div>
        <Header />
        <div className="container mx-auto">
          <div className="p-4">
            <div className="text-3xl font-semibold mb-4">Shopping Cart</div>
            <div className="space-y-4">
            
                <CartItem/>
        
            </div>
            <div className="mt-4">
              <div className="flex justify-between items-center">
                <div className="text-xl font-semibold">
                  Total: 600
                </div>
                <button
                  
                  className="bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                  Clear Cart
                </button>
                <button
                 
                  className="bg-blue-500 text-white px-4 py-2 rounded-md"
                  onClick={HandleOrder}
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Cart;