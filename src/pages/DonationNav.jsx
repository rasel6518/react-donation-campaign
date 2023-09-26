import { useEffect, useState } from "react";

import Donated from "../components/Donated";


const DonationNav = () => {

    const [donate, setDonate] = useState([])
    const [noData, setNoData] = useState(false)
    const [isShow, setIsShow] = useState(false)
    const [dLength, setDLength] = useState(0)

    useEffect(() => {
        const donationCard = JSON.parse(localStorage.getItem('donation'));



        if (donationCard) {
            setDLength(donationCard.length);
            setDonate(donationCard)
        } else {
            setNoData('No Data Available')
        }



    }, [])



    return (
        <div>
            {
                noData ? <p className="flex justify-center h-[60vh] items-center text-3xl font-semibold">{noData}</p> :


                    <div className="">
                        <div className="grid md:grid-cols-2 gap-7">

                            {
                                isShow ? donate?.map(donation => <Donated key={donation.id} donation={donation}></Donated>) :

                                    donate?.slice(0, 4).map(donation => <Donated key={donation.id} donation={donation}></Donated>)
                            }

                        </div>

                        <div className="text-center my-5">
                            {dLength > 4 && !isShow && (
                                <button
                                    onClick={() => setIsShow(!isShow)}
                                    className="px-5 py-3 font-bold rounded-lg text-lg text-white bg-green-600"
                                >
                                    See All
                                </button>
                            )}
                        </div>
                    </div>
            }
        </div >
    );
};

export default DonationNav;