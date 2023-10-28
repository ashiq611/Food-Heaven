import { useState } from "react";
import Header from "../components/Header";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addProduct } from "../services/product";


const ProductAddForm = () => {
    const queryClient = useQueryClient()

    const [product, setProduct] = useState({
      photo: "",
      name: "",
      price: 0,
      description: "",
    });

     const addProductMutate = useMutation({
       mutationFn: (item) => addProduct(item),
       onSuccess: () => {
         // Invalidate and refetch
         queryClient.invalidateQueries({ queryKey: ["products"] });
       },
     });

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
      formData.append("name", product.name);
      formData.append("price", product.price);
      formData.append("description", product.description);
      formData.append("photo", product.photo);

      addProductMutate.mutate(formData);
    };

    
    return (
      <div>
        <Header/>
        <div className="w-full p-4">
          <div className="max-w-md mx-auto">
            <form
            encType="multipart/form-data"
            onSubmit={handleSubmit}>
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
                  value={product.name}
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
                  value={product.price}
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
                  value={product.description}
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

export default ProductAddForm;