import Header from "../components/Header";
import Hero from "../components/Hero";
import {useQuery} from '@tanstack/react-query';
import {getAllProducts} from '../services/product';
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";


const Home = () => {

    const { data: products, isLoading } = useQuery({
      queryKey: ["products"],
      queryFn: getAllProducts,
    });
    if(isLoading){
        return (
          <div className="min-h-screen min-w-full flex justify-center items-center">
            <span className=" loading loading-bars loading-lg"></span>
          </div>
        );
    }

    console.log(products)

    return (
      <div>
        <div>
          <Header />
          <Hero />

          <div className="container mx-auto mt-20 flex justify-between gap-5 flex-wrap ">
            {
              (products?.length > 0) && (
                products?.map((product) => (
              <ProductCard key={product.id} data={product} />
            ))
              )
            }
          </div>
          <Footer/>
        </div>
      </div>
    );
};

export default Home;