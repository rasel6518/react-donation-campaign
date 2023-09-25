import { Link } from "react-router-dom";


const DonationsCard = ({ donations }) => {

    console.log(donations);
    return (
        <div>
            <Link to={`/donations/${donations.id}`}>
                <div style={{ backgroundColor: donations.CategoryColor }} className="card  bg-base-100 shadow-xl">
                    <figure><img className="w-[300px] h-[190px]" src={donations.Picture} alt="Shoes" /></figure>
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