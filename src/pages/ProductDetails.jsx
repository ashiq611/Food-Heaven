import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getAllProductById } from "../services/product";
import Header from "../components/Header";


const ProductDetails = () => {

    const {id} = useParams();

    const { data: product, isLoading } = useQuery({
      queryKey: [`products/${id}`, id],
      queryFn: () => getAllProductById(id),
    });
    if (isLoading) {
      return <div>Loading.......</div>;
    }
    return (
      <div>
        <Header/>
        <div className="container mx-auto mt-20">
          {product !== null && (
            <div className="card lg:card-side bg-base-100 shadow-xl">
              <figure className="w-96">
                <img src={product.photo} alt="Album" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{product.name}</h2>
                <p>{product.description}</p>
                <p>${product.price}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Listen</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
};

export default ProductDetails;