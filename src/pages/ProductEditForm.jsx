
import Header from "../components/Header";


const ProductEditForm = () => {
 

 


 

  
  

  

  return (
    <div>
      <Header />
      <div className="w-full p-4">
        <div className="max-w-md mx-auto">
            {/* for formdata web api , we use encType */}
          <form encType="multipart/form-data" >  
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Product Image
              </label>
              <input
                type="file"
                name="photo"
               
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
