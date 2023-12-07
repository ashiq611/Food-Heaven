
import { useNavigate } from "react-router-dom";



const ProductCard = ({img}) => {
    // cosnt {name, description, price , photo} = data

    const navigate = useNavigate()
    

    




    return (
      <div onClick={() => navigate(`/products/8`)}>
        <div className="card w-96 h-[400px] bg-base-100 shadow-xl">
          <figure>
            <img
              src={img}
              alt="Shoes"
              className="max-w-md"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">food</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, quibusdam.</p>
            <p>$50</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ProductCard;