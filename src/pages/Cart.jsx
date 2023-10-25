import { useContext, useState } from "react";
import { CartContext } from "../contexts/Cart";
import Header from "../components/Header";
import CartItem from "../components/CartItem";


const Cart = () => {
    const cartContext = useContext(CartContext);

// option starts
    const [cartItems, setCartItems] = useState([
      {
        id: 1,
        name: "Product 1",
        price: 19.99,
        quantity: 2,
      },
      {
        id: 2,
        name: "Product 2",
        price: 29.99,
        quantity: 1,
      },
    ]);

    const calculateTotal = () => {
      return cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    };

    const incrementQuantity = (itemId) => {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    };

    const decrementQuantity = (itemId) => {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === itemId && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    };

    //   optional ends
    return (
      <div>
        <Header />
        <div className="container mx-auto">
          <div className="p-4">
            <div className="text-3xl font-semibold mb-4">Shopping Cart</div>
            <div className="space-y-4">
              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  incrementQuantity={incrementQuantity}
                  decrementQuantity={decrementQuantity}
                />
              ))}
            </div>
            <div className="mt-4">
              <div className="flex justify-between items-center">
                <div className="text-xl font-semibold">
                  Total: ${calculateTotal().toFixed(2)}
                </div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
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