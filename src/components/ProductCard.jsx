import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../contexts/Cart";
import { ADD_TO_CART } from "../actions/cart";


const ProductCard = ({data}) => {
    // cosnt {name, description, price , photo} = data

    const navigate = useNavigate()
    const { disPatchCartAction } = useContext(CartContext);

    const HandleBuy = (e) => {
      e.stopPropagation();
      disPatchCartAction({type: ADD_TO_CART, payload: data})
    }




    return (
      <div onClick={() => navigate(`/products/${data.id}`)}>
        <div className="card w-96 h-[400px] bg-base-100 shadow-xl">
          <figure>
            <img src={data.photo} alt="Shoes" className="max-w-md" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{data.name}</h2>
            <p>{data.description}</p>
            <p>${data.price}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary" onClick={HandleBuy}>
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ProductCard;