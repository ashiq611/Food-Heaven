import { useContext } from "react";
import { CartContext } from "../contexts/Cart";
import Header from "../components/Header";
import CartItem from "../components/CartItem";
import { AuthContext } from "../contexts/Auth";
import { useNavigate } from "react-router-dom";
import { CLEAR_CART } from "../actions/cart";


const Cart = () => {
    const { cart, disPatchCartAction } = useContext(CartContext);
    const authContext = useContext(AuthContext);
    const navigate = useNavigate();

    const HandleOrder = () => {
      navigate('/order-placing-form')
    }

    const HandleClearCart = () => {
      disPatchCartAction({type: CLEAR_CART})
    }



    const calculateTotal = () => {
      return cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    };

    
    return (
      <div>
        <Header />
        <div className="container mx-auto">
          <div className="p-4">
            <div className="text-3xl font-semibold mb-4">Shopping Cart</div>
            <div className="space-y-4">
              {cart.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                />
              ))}
            </div>
            <div className="mt-4">
              <div className="flex justify-between items-center">
                <div className="text-xl font-semibold">
                  Total: ${calculateTotal().toFixed(2)}
                </div>
                <button
                  
                  className="bg-blue-500 text-white px-4 py-2 rounded-md"
                  onClick={HandleClearCart}
                >
                  Clear Cart
                </button>
                <button
                  disabled={!authContext.isLoggedIn || cart.length === 0}
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