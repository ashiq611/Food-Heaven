
import { useNavigate } from "react-router-dom";
import { removeProduct } from "../services/product";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const ProductRow = ({ product }) => {
  const queryClient = useQueryClient();

  const navigate = useNavigate();

  const removeProductMutatation = useMutation({
    mutationFn: (id) => removeProduct(id),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });


  return (
    <tr>
      <td className="border p-2">
        <img
          src={product?.photo}
          alt={product?.name}
          className="w-16 h-16 object-cover"
        />
      </td>
      <td className="border p-2">{product?.name}</td>
      <td className="border p-2">${product?.price}</td>
      <td className="border p-2">
        <>
          <button
            onClick={() => navigate(`/admin/product-edit-form/${product?.id}`)}
            className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Edit
          </button>
          <button
            onClick={() => removeProductMutatation.mutate(product?.id)}
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
