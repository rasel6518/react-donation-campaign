import { NavLink } from "react-router-dom";



const Nav = () => {
    return (
        <div>


            <nav className="flex justify-between gap-3 items-center p-1 md:p-10 mx-auto m-2 md:m-5">
                <img src="Logo.png" alt="donation-campaign" className=" w-[150px] md:w-[252px] h-[40px] md:h-[72px]" />
                <ul className="flex gap-5">
                    <li className="font-bold text-xl md:text-3xl">
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? " text-[#FF444A]   underline" : ""
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className="font-bold text-xl md:text-3xl">
                        <NavLink
                            to="/donation"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? " text-[#FF444A]  underline" : ""
                            }
                        >
                            Donation
                        </NavLink>
                    </li>
                    <li className="font-bold text-xl md:text-3xl">
                        <NavLink
                            to="/statistics"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? " text-[#FF444A]  underline" : ""
                            }
                        >
                            Statistics
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Nav;


