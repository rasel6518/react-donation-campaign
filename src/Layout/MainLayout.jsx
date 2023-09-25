import { Outlet } from "react-router-dom";
import Nav from "../components/header/Nav";


const MainLayout = () => {
    return (
        <div className="max-w-[1300px] mx-auto">
            <Nav ></Nav>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;