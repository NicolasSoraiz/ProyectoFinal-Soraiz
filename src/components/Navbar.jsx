import CarWidget from "./CartWidget";
import Dropdown from "./Dropdown";
import { Link } from "react-router";

function Navbar({ categories }) {
    return (
        <header className="text-white bg-green-700 p-2 flex justify-between items-center">
            <Link to="/" className="text-3xl font-bold">Digital Market</Link>
            <Dropdown items={categories} />
            <CarWidget count={3} />
        </header>
    );
}

export default Navbar
