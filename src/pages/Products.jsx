
import ProductRow from "../components/ProductRow";

import Header from "../components/Header";

const Products = () => {
  
  

  


  return (
    <div>
      <Header />
      <div className="container mx-auto w-full p-4">
        <div className="text-3xl font-semibold mb-4">Product List</div>

        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border p-2">Product Image</th>
              <th className="border p-2">Product Name</th>
              <th className="border p-2">Product Price</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
           
              <ProductRow/>
          
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
