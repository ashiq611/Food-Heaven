import { useState } from "react";
import Header from "../components/Header";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {  getAllProductById, updateProduct } from "../services/product";
import { useParams } from "react-router-dom";

const ProductEditForm = () => {
  const queryClient = useQueryClient();

  const [product, setProduct] = useState({
    photo: "",
    name: "",
    price: 0,
    description: "",
  });

  const {id} = useParams();

   const updateProductMutate = useMutation({
     mutationFn: (item) => updateProduct(item),
     onSuccess: () => {
       // Invalidate and refetch
       queryClient.invalidateQueries({ queryKey: ["products"] });
     },
   });

    const { data , isLoading } = useQuery({
      queryKey: [`products ${id}`, id],
      queryFn: () => getAllProductById(id),
    });
    if (isLoading) {
      return (
        <div className="min-h-screen min-w-full flex justify-center items-center">
          <span className=" loading loading-bars loading-lg"></span>
        </div>
      );
    }


 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProduct({
      ...product,
      photo: file,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", product.name || data?.name);
    formData.append("price", product.price || data?.price);
    formData.append("description", product.description || data?.description);
    formData.append("photo", product.photo || data?.photo);

    updateProductMutate.mutate({id: id, product: formData});
  };

  return (
    <div>
      <Header />
      <div className="w-full p-4">
        <div className="max-w-md mx-auto">
            {/* for formdata web api , we use encType */}
          <form encType="multipart/form-data" onSubmit={handleSubmit}>  
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Product Image
              </label>
              <input
                type="file"
                name="photo"
                onChange={handleImageChange}
                className="w-full p-2 border rounded-md focus:outline-none"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Product Name
              </label>
              <input
                type="text"
                name="name"
                value={product.name || data?.name}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md focus:outline-none"
                placeholder="Product Name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Product Price
              </label>
              <input
                type="number"
                name="price"
                value={product.price || data?.price}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md focus:outline-none"
                placeholder="Product Price"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Description
              </label>
              <textarea
                name="description"
                value={product.description || data?.description}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md focus:outline-none"
                placeholder="Product Description"
                rows="4"
              />
            </div>
            <div className="text-center">
              <input
                type="submit"
                value="Add Product"
                className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductEditForm;
