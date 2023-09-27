import { Link } from "react-router-dom";


const DonationsCard = ({ donations, DonationsCard }) => {


    return (
        <div>
            <Link to={`/donations/${donations.id}`}>
                <div style={{ backgroundColor: donations.CategoryColor }} className="card  bg-base-100 shadow-xl">
                    <figure><img className="md:w-[300px] md:h-[190px]" src={donations.Picture} alt="Shoes" /></figure>
                    <div style={{ color: donations.TextColor }} className="p-4 mt-4">
                        <button style={{ backgroundColor: donations.CardColor, }} className="px-3 py-1">
                            {donations.Category}

                        </button>
                        <p className="mt-4 text-xl font-semibold">  {donations.Title}</p>

                    </div>
                </div>

            </Link>
        </div >
    );
};

export default DonationsCard;