import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const Donation = () => {

    const { id } = useParams()

    const donations = useLoaderData()

    console.log(donations);

    const [donation, setdonation] = useState({})

    useEffect(() => {

        const findDonation = donations?.find(donation => donation.id == id)

        setdonation(findDonation)


    }

        , [id, donations])

    return (
        <div>
            {/* <img src={donation.Picture} alt="" />

            <h1>{donation.Title}</h1>

            <p>{donation.Description}</p> */}

            <div
                className="block rounded-lg bg-white 0">
                <div className="relative  bg-cover bg-no-repeat">
                    <img
                        className="rounded-t-lg w-full h-[90vh]"
                        src={donation.Picture}
                        alt="" />
                </div>
                <div className="absolute min-w-fit  bg-blend-darken top-[530px]  left-32">
                    <button className="  text-white  bg-[#FF444A] text-2xl px-5 py-2      font-semibold">Donate {donation.Price}$</button>

                </div>


                <div className="p-6 text-black space-y-5 font-bold text-3xl">
                    {donation.Title}
                    <p className="mb-4 text-base">
                        {donation.Description}
                    </p>

                </div>
            </div>



        </div>
    );
};

export default Donation;