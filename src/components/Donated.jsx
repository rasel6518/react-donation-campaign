
const Donated = ({ donation }) => {

    // text-center items-center px-3 py-1 w-2/5

    return (
        <div>
            <div className="card card-side bg-base-100  my-5 shadow-xl">
                <figure><img src={donation.Picture} className="w-[420px] h-[260px]" alt="Movie" /></figure>
                <div style={{ backgroundColor: donation.CategoryColor }} className="w-full space-y-3 px-5 py-10">
                    <button style={{ backgroundColor: donation.CardColor, color: donation.TextColor }} className="flex justify-start font-medium rounded-lg px-3 py-1 ">{donation.Category}</button>
                    <p className="text-2xl font-medium"> {donation.Title}</p>
                    <p style={{ color: donation.TextColor }} className="text-lg font-semibold">${donation.Price}</p>
                    <div className=" ">
                        <button style={{ backgroundColor: donation.TextColor }} className="px-5 py-3 font-bold rounded-lg text-lg text-white">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Donated;