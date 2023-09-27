import DonationsCard from "./DonationsCard";


const Donations = ({ donations }) => {


    return (
        <div className="py-10 ">

            <div className="grid   w-[80vw] mx-auto md:w-[100%] md:grid-cols-2 lg:grid-cols-4   gap-8 md:gap-5">
                {
                    donations?.map((donations) => <DonationsCard key={donations.id} donations={donations} ></DonationsCard>)
                }

            </div>
        </div>
    );
};

export default Donations;