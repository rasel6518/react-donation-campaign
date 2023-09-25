import { Link } from "react-router-dom";


const DonationsCard = ({ donations }) => {

    console.log(donations);
    return (
        <div>
            <Link to={`/donations/${donations.id}`}>
                <div className="card bg-[donations.CardColor] bg-base-100 shadow-xl">
                    <figure><img className="w-[300px] h-[190px]" src={donations.Picture} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {donations.Category}

                        </h2>
                        <p>  {donations.Title}</p>

                    </div>
                </div>

            </Link>
        </div >
    );
};

export default DonationsCard;