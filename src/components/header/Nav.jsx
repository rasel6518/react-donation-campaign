import { NavLink } from "react-router-dom";

import img from "../../../public/Logo.png";



const Nav = () => {
    return (
        <div>


            <nav className="md:flex   md:justify-between gap-3 items-center p-1 md:p-10  mx-20 my-5  md:m-5">
                <img src={img} alt="donation-campaign" className=" w-[150px] md:w-[252px] h-[40px] md:h-[72px] mb-3" />
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


