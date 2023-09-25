import { useLoaderData } from "react-router-dom";
import Donations from "../components/Donations";
import Banner from "../components/header/Banner";


const Home = () => {

    const donations = useLoaderData()


    return (
        <div>
            <Banner></Banner>
            <Donations donations={donations}></Donations>
        </div>
    );
};

export default Home;