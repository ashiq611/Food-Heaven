
import Header from "../components/Header";



const ProductDetails = () => {

    

    





    return (
      <div>
        <Header />
        <div className="container mx-auto mt-20">
          <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure className="w-96">
              <img
                src="https://images.pexels.com/photos/12124957/pexels-photo-12124957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Album"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">food</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, sapiente.</p>
              <p>$70</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ProductDetails;