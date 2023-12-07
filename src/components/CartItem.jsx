import {  useState } from "react";


const CartItem = () => {
  const [quantity, setQuantity] = useState(1);
  

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => {
        
        return prevQuantity - 1;
      });
    }
  };

  const handleIncrement = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => {
       
        return prevQuantity + 1;
      });
    }
  };

 

  

  return (
    <div>
      <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
        <div className="w-16 h-16 md:w-32 md:h-32">
          <img
            src="https://images.pexels.com/photos/12124957/pexels-photo-12124957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="food"
          />
        </div>
        <div className="flex-1">
          <div className="text-lg font-semibold">food</div>
          <div className="text-gray-500">Price: 800</div>
          <div className="text-gray-500">Quantity: 9</div>
        </div>
        <div className="text-xl font-semibold">700</div>
        <div className="text-red-600 cursor-pointer">Remove</div>
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
