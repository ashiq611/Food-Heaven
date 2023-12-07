
import { useNavigate } from "react-router-dom";


const ProductRow = () => {


  const navigate = useNavigate();

 


  return (
    <tr>
      <td className="border p-2">
        <img
          src="https://images.pexels.com/photos/12124957/pexels-photo-12124957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="food"
          className="w-16 h-16 object-cover"
        />
      </td>
      <td className="border p-2">food</td>
      <td className="border p-2">$40</td>
      <td className="border p-2">
        <>
          <button
            onClick={() => navigate(`/admin/product-edit-form/8`)}
            className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Edit
          </button>
          <button
           
            className="p-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none ml-2"
          >
            Remove
          </button>
        </>
      </td>
    </tr>
  );
};

export default ProductRow;
