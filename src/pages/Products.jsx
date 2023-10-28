
import ProductRow from "../components/ProductRow";
import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../services/product";
import Header from "../components/Header";

const Products = () => {
  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen min-w-full flex justify-center items-center">
        <span className=" loading loading-bars loading-lg"></span>
      </div>
    );
  }

  

  


  return (
    <div>
      <Header />
      <div className="w-full p-4">
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
            {products?.length !== 0 && products?.map((product) => (
              <ProductRow
                key={product.id}
                product={product}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
