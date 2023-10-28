import { useContext, useState } from "react";
import { CartContext } from "../contexts/Cart";
import {
  MODIFY_QUANTITY_OF_A_ITEM,
  REMOVE_ITEM_FROM_CART,
} from "../actions/cart";

const CartItem = ({ item }) => {
  const [quantity, setQuantity] = useState(item.quantity);
  const { disPatchCartAction } = useContext(CartContext);

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => {
        disPatchCartAction({
          type: MODIFY_QUANTITY_OF_A_ITEM,
          payload: { id: item.id, quantity: prevQuantity - 1 },
        });
        return prevQuantity - 1;
      });
    }
  };

  const handleIncrement = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => {
        disPatchCartAction({
          type: MODIFY_QUANTITY_OF_A_ITEM,
          payload: { id: item.id, quantity: prevQuantity + 1 },
        });
        return prevQuantity + 1;
      });
    }
  };

  const HandleQty = (e) => {
    if (parseInt(e.target.value) >= 0) {
      setQuantity(parseInt(e.target.value));
      disPatchCartAction({
        type: MODIFY_QUANTITY_OF_A_ITEM,
        payload: { id: item.id, quantity: quantity },
      });
    }
  };

  const HandleRemove = () => {
    disPatchCartAction({ type: REMOVE_ITEM_FROM_CART, payload: item.id });
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
        <div className="w-16 h-16 md:w-32 md:h-32">
          <img src={item.photo} alt={item.title} />
        </div>
        <div className="flex-1">
          <div className="text-lg font-semibold">{item.title}</div>
          <div className="text-gray-500">Price: ${item.price}</div>
          <div className="text-gray-500">Quantity: {quantity}</div>
        </div>
        <div className="text-xl font-semibold">
          ${item.quantity ? (item.price * quantity).toFixed(2) : 0}
        </div>
        <div className="text-red-600 cursor-pointer" onClick={HandleRemove}>
          Remove
        </div>
        <div className="flex space-x-2">
          <button
            onClick={handleDecrement}
            className="text-sm text-gray-600 px-2 py-1 border rounded-full hover:bg-gray-100"
          >
            -
          </button>
          <input
            className="text-lg border border-gray-400 rounded-md w-16 md:w-20 h-10 text-center"
            type="number"
            value={quantity}
            min="1"
            onChange={HandleQty}
          />
          <button
            onClick={handleIncrement}
            className="text-sm text-blue-600 px-2 py-1 border rounded-full hover:bg-blue-100"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
