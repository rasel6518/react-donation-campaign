import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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


    const handletodonation = () => {



        const donated = [];
        const donationCard = JSON.parse(localStorage.getItem('donation'));

        if (!donationCard) {
            donated.push(donation);
            localStorage.setItem('donation', JSON.stringify(donated));
            toast('Donation Successful');
        } else {
            donated.push(...donationCard, donation);
            localStorage.setItem('donation', JSON.stringify(donated));
            toast('Donation Successful');
        }


    }

    return (
        <div>


            <div
                className=" relative rounded-lg bg-white 0">
                <div className=" relative bg-cover bg-no-repeat">
                    <img
                        className="rounded-t-lg w-full ] lg:h-[600px]"
                        src={donation.Picture}
                        alt="" />

                    <div className="absolute   inset-0 bg-opacity-50 md:top-[390px] bg-black top-[180px]   lg:top-[500px]  ">
                        <button onClick={handletodonation} className=" mt-5 ml-5 rounded text-white  bg-[#FF444A] text-2xl px-5 py-2      font-semibold">Donate {donation.Price}$</button>

                    </div>



                </div>



                <div className="p-6 text-black space-y-5 font-bold text-4xl">
                    {donation.Title}
                    <p className="mb-4 mt-4 text-base">
                        {donation.Description}
                    </p>

                </div>
            </div>

            <ToastContainer position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light">

            </ToastContainer>


        </div>
    );
};

export default Donation;