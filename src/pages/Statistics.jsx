import { useLoaderData } from "react-router-dom";
import Piechart from "../components/Piechart";

const Statistics = () => {
    const donation = useLoaderData();


    return (
        <div className="mx-auto flex justify-center items-center w-[80vw] md:h-[80vh] lg:h-[60vh]" >
            <Piechart donation={donation}></Piechart>
        </div>
    );
};

export default Statistics;
