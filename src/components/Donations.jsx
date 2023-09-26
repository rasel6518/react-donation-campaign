import DonationsCard from "./DonationsCard";


const Donations = ({ donations }) => {


    return (
        <div className="py-10 ">

            <div className="grid md:grid-cols-4 gap-5">
                {
                    donations?.map((donations) => <DonationsCard key={donations.id} donations={donations} ></DonationsCard>)
                }

            </div>
        </div>
    );
};

export default Donations;