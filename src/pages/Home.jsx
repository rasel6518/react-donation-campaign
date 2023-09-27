import { useLoaderData } from "react-router-dom";
import Donations from "../components/Donations";
import Banner from "../components/header/Banner";
import Search from "../components/Search";


const Home = () => {

    const donations = useLoaderData()


    return (
        <div>
            <Banner></Banner>
            <Donations donations={donations}></Donations>
            <Search donations={donations}></Search>
        </div>
    );
};

export default Home;