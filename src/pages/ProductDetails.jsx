import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getAllProductById } from "../services/product";
import Header from "../components/Header";
import { useContext } from "react";
import { CartContext } from "../contexts/Cart";
import { ADD_TO_CART } from "../actions/cart";


const ProductDetails = () => {

    const {id} = useParams();

     const { disPatchCartAction } = useContext(CartContext);

    const { data: product, isLoading } = useQuery({
      queryKey: [`products/${id}`, id],
      queryFn: () => getAllProductById(id),
    });
    if (isLoading) {
      return (
        <div className="min-h-screen min-w-full flex justify-center items-center">
          <span className="loading loading-bars loading-lg"></span>
        </div>
      );
    }


    const HandleBuy = () => {
      
      disPatchCartAction({ type: ADD_TO_CART, payload: product });
    };




    return (
      <div>
        <Header />
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
                  <button className="btn btn-primary" onClick={HandleBuy}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
};

export default ProductDetails;