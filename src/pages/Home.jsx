import Header from "../components/Header";
import Hero from "../components/Hero";
import {useQuery} from '@tanstack/react-query';
import {getAllProducts} from '../services/product';


const Home = () => {

    const {data: products, isLoading} = useQuery(['products'],  getAllProducts);
    if(isLoading){
        return <div>Loading.......</div>
    }

    return (
        <div>
            <div>
                <Header/>
                <Hero/>

                <div>
                    {
                        products?.map((product) => (
                            <li>{product.name}</li>
                        ))
                    }
                </div>

            </div>
        </div>
    );
};

export default Home;