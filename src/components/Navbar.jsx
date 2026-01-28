import CarWidget from "./CartWidget";
import Dropdown from "./Dropdown";
import { Link } from "react-router";

function Navbar({ categories }) {
    return (
        <header className="text-white bg-green-700 p-3 flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center">
            <Link 
                to="/" 
                className="text-3xl font-bold"
                >
                    Digital Market
                </Link>

            <Dropdown items={categories} />

            <CarWidget />
        </header>
    )
}

export default Navbar