import Header from "../components/Header";
import Hero from "../components/Hero";

import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";



const Home = () => {

  

   

    return (
      <div>
        <div>
          <Header />
          <Hero />

          <div className="container mx-auto mt-20 flex justify-between gap-5 flex-wrap ">
            <ProductCard img="https://images.pexels.com/photos/1815898/pexels-photo-1815898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <ProductCard img="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <ProductCard img="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          </div>
          <Footer />
        </div>
      </div>
    );
};

export default Home;