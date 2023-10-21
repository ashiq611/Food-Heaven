

const ProductCard = ({data}) => {
    // cosnt {name, description, price , photo} = data
    return (
      <div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={data.photo} alt="Shoes" className="max-w-sm" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{data.name}</h2>
            <p>{data.description}</p>
            <p>{data.price}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ProductCard;