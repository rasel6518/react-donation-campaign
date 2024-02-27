import { useLoaderData } from "react-router-dom";
import Donations from "../components/Donations";
import Banner from "../components/header/Banner";
import { useState } from "react";
// import Search from "../components/Search";


const Home = () => {

    const [search, setSearch] = useState('')

    const donations = useLoaderData()

    const filterDonation = donations.filter(donation => donation.Category.toLowerCase().includes(search.toLowerCase()))

    console.log(search, filterDonation)



    return (
        <div>
            <Banner filter={setSearch}></Banner>
            <div className="  mt-16 md:mt-10"> <Donations donations={filterDonation}></Donations></div>
            {/* <Search donations={donations}></Search> */}
        </div>
    );
};

export default Home;