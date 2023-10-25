import { useState } from "react";


const CartItem = ({ item, incrementQuantity, decrementQuantity }) => {
  const [quantity, setQuantity] = useState(item.quantity);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
    incrementQuantity(item.id);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      decrementQuantity(item.id);
    }
  };
  return (
    <div>
      <div className="flex items-center space-x-4">
        <div className="w-16 h-16 bg-gray-100 rounded-md"></div>
        <div className="flex-1">
          <div className="text-lg font-semibold">{item.name}</div>
          <div className="text-gray-500">Price: ${item.price}</div>
          <div className="text-gray-500">Quantity: {quantity}</div>
        </div>
        <div className="text-xl font-semibold">
          ${(item.price * quantity).toFixed(2)}
        </div>
        <div className="text-red-600 cursor-pointer">Remove</div>
        <div className="space-x-2">
          <button
            onClick={handleDecrement}
            className="text-sm text-gray-600 px-2 py-1 border rounded-full hover:bg-gray-100"
          >
            -
          </button>
          <span className="text-lg">{quantity}</span>
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